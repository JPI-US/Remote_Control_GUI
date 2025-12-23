import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.solarweb.com/swqapi/pvsystems/49bfa0cf-3479-4852-bf3a-91ad30ac50cc/aggdata/years/2025/months/11/days", {
      method: "GET",
      headers: {
        accept: "application/json",
        AccessKeyId: process.env.SOLAR_KEY_ID,
        AccessKeyValue: process.env.SOLAR_KEY_VALUE,
      },
      cache: "no-store",
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Solar data" },
      { status: 500 }
    );
  }
}
