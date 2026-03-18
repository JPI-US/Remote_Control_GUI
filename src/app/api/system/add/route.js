import { encryptSystemId } from "@/lib/froniusCrypto";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const body = await req.json();
    const { customerId, systemId, systemName } = body;

    if (!customerId || !systemName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let encryptedData = null;
    let hasFroniusSystem = false;

    // Encrypt external Fronius System ID if provided
    if (systemId) {
      encryptedData = encryptSystemId(systemId);
      hasFroniusSystem = true;
    }

    // 1️⃣ Create the system record (DB integer ID auto-generated)
    const system = await prisma.systems.create({
      data: {
        system_name: systemName,
        system_cipher: encryptedData ? encryptedData.cipher : null,
        system_iv: encryptedData ? encryptedData.iv : null,
        system_tag: encryptedData ? encryptedData.tag : null,
        has_fronius_system: hasFroniusSystem,
      },
    });

    // 2️⃣ Link system to customer via join table
    await prisma.customer_system.create({
      data: {
        customer_id: customerId,
        system_id: system.id, // internal integer ID
      },
    });

    return NextResponse.json({ success: true, system });
  } catch (error) {
    console.error("Error adding system:", error);
    return NextResponse.json(
      { error: "Failed to save system" },
      { status: 500 }
    );
  }
}