import { NextRequest, NextResponse } from "next/server";

const API = "http://209.38.77.179:3001";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(`${API}/sessions/active`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return NextResponse.json(data, {
      status: res.status,
    });

  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}