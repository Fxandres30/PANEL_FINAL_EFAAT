import { NextResponse } from "next/server";

export async function GET(req: Request) {

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    const res = await fetch(`http://localhost:4000/sessions/status/${id}`);

    const data = await res.json();

    return NextResponse.json(data);

}