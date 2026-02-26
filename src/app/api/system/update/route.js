import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { encryptSystemId } from "@/lib/froniusCrypto";

export const dynamic = 'force-dynamic';

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { systemDbId, newSystemId } = body; // DB integer ID

    if (!systemDbId || !newSystemId) {
      return NextResponse.json(
        { error: "Missing systemDbId or newSystemId" },
        { status: 400 }
      );
    }

    // Encrypt the new external Fronius System ID
    const encryptedData = encryptSystemId(newSystemId);

    // Update the system record
    const updatedSystem = await prisma.systems.update({
      where: { id: systemDbId }, // use internal integer ID
      data: {
        system_cipher: encryptedData.cipher,
        system_iv: encryptedData.iv,
        system_tag: encryptedData.tag,
        has_fronius_system: true, // mark as real Fronius system
      },
    });

    return NextResponse.json({ success: true, system: updatedSystem });
  } catch (error) {
    console.error("Error updating system:", error);
    return NextResponse.json(
      { error: "Failed to update system" },
      { status: 500 }
    );
  }
}
