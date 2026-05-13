#!/usr/bin/env node
/**
 * Rotates FRONIUS_SYSTEM_KEY for all systems that have an encrypted system ID.
 *
 * Usage:
 *   OLD_KEY=<hex> NEW_KEY=<hex> DATABASE_URL=<url> node scripts/rotate-fronius-key.js
 *
 * Generate a new key:
 *   node -e "const crypto=require('crypto'); console.log(crypto.randomBytes(32).toString('hex'))"
 */

"use strict";

const crypto = require("crypto");
const { PrismaClient } = require("../src/generated/prisma");

const OLD_KEY = process.env.OLD_KEY;
const NEW_KEY = process.env.NEW_KEY;

if (!OLD_KEY || !NEW_KEY) {
  console.error("Error: OLD_KEY and NEW_KEY environment variables are required.");
  process.exit(1);
}
if (OLD_KEY === NEW_KEY) {
  console.error("Error: OLD_KEY and NEW_KEY must be different.");
  process.exit(1);
}
if (Buffer.from(OLD_KEY, "hex").length !== 32) {
  console.error("Error: OLD_KEY must be a 64-character hex string (32 bytes for AES-256).");
  process.exit(1);
}
if (Buffer.from(NEW_KEY, "hex").length !== 32) {
  console.error("Error: NEW_KEY must be a 64-character hex string (32 bytes for AES-256).");
  process.exit(1);
}

function decrypt(record, keyHex) {
  const key = Buffer.from(keyHex, "hex");
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from(record.system_iv, "hex")
  );
  decipher.setAuthTag(Buffer.from(record.system_tag, "hex"));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(record.system_cipher, "hex")),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}

function encrypt(plaintext, keyHex) {
  const key = Buffer.from(keyHex, "hex");
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([
    cipher.update(plaintext, "utf8"),
    cipher.final(),
  ]);
  return {
    system_cipher: encrypted.toString("hex"),
    system_iv: iv.toString("hex"),
    system_tag: cipher.getAuthTag().toString("hex"),
  };
}

async function main() {
  const prisma = new PrismaClient();

  try {
    const systems = await prisma.systems.findMany({
      where: {
        has_fronius_system: true,
        system_cipher: { not: null },
        system_iv: { not: null },
        system_tag: { not: null },
      },
      select: {
        id: true,
        system_name: true,
        system_cipher: true,
        system_iv: true,
        system_tag: true,
      },
    });

    if (systems.length === 0) {
      console.log("No systems with encrypted IDs found. Nothing to migrate.");
      return;
    }

    console.log(`Found ${systems.length} system(s) to migrate.\n`);

    for (const system of systems) {
      process.stdout.write(`  [${system.id}] ${system.system_name} — decrypting... `);

      let plaintext;
      try {
        plaintext = decrypt(system, OLD_KEY);
      } catch (err) {
        console.error(`FAILED (wrong OLD_KEY or corrupted data): ${err.message}`);
        throw err;
      }

      const reEncrypted = encrypt(plaintext, NEW_KEY);

      await prisma.systems.update({
        where: { id: system.id },
        data: reEncrypted,
      });

      console.log("re-encrypted OK.");
    }

    console.log("\nMigration complete. Update FRONIUS_SYSTEM_KEY to the NEW_KEY value and redeploy.");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error("\nMigration failed:", err.message);
  process.exit(1);
});
