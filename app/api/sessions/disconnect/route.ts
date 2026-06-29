import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const { sessionId } = await req.json();

    const res = await fetch("http://localhost:4000/sessions/disconnect", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            sessionId

        })

    });

    const data = await res.json();

    return NextResponse.json(data);

}