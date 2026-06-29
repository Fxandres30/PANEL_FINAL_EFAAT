"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import { connectSession } from "@/services/sessions/connectSession";
import { getSession } from "@/services/sessions/getSession";

export function useSession(
    id: string,
    estadoInicial: string
) {

    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);

    const [qr, setQr] = useState("");

    const [estadoActual, setEstadoActual] =
        useState(estadoInicial);

    useEffect(() => {

        setEstadoActual(estadoInicial);

    }, [estadoInicial]);

    async function accionPrincipal() {

        if (loading)
            return;

        if (estadoActual === "conectado")
            return;

        if (estadoActual === "esperando_qr") {

            const { data } =
                await getSession(id);

            if (data?.qr) {

                setQr(data.qr);

            }

            setOpen(true);

            return;

        }

        setLoading(true);

        await connectSession(id);

    }

    function textoBoton() {

        if (loading)
            return "Generando QR...";

        if (estadoActual === "conectado")
            return "Conectado";

        if (estadoActual === "esperando_qr")
            return "Ver QR";

        return "Conectar";

    }

    useEffect(() => {

        const canal = supabase

            .channel(`sesion-${id}`)

            .on(
                "postgres_changes",
                {
                    event: "UPDATE",
                    schema: "public",
                    table: "sesiones",
                    filter: `id=eq.${id}`,
                },
                (payload: any) => {

                    const sesion =
                        payload.new;

                    setEstadoActual(
                        sesion.estado
                    );

                    if (sesion.qr) {

                        setQr(sesion.qr);

                        setOpen(true);

                    }

                    if (
                        sesion.estado ===
                        "conectado"
                    ) {

                        setOpen(false);

                    }

                    setLoading(false);

                }
            )

            .subscribe();

        return () => {

            supabase.removeChannel(canal);

        };

    }, [id]);

    return {

        loading,

        open,

        qr,

        estadoActual,

        accionPrincipal,

        textoBoton,

        cerrarQR: () => setOpen(false)

    };

}