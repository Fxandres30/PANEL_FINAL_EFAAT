import { NextRequest, NextResponse } from "next/server";
import { reiniciarTabla } from "@/services/tablas/reiniciarTabla";

export async function POST(req: NextRequest) {

    try {

        const { precio } = await req.json();

        await reiniciarTabla(Number(precio));

        return NextResponse.json({

            ok: true,
            mensaje: "Tabla reiniciada correctamente."

        });

    } catch (error: any) {

        return NextResponse.json({

            ok: false,
            mensaje: error.message

        }, {
            status: 500
        });

    }

}