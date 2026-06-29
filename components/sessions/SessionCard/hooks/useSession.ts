"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import { connectSession } from "@/services/sessions/connectSession";
import { disconnectSession } from "@/services/sessions/disconnectSession";
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

        // ==========================
        // DESCONECTAR
        // ==========================
        if (estadoActual === "conectado") {

            setLoading(true);

            await disconnectSession(id);

            return;

        }

        // ==========================
        // MOSTRAR QR
        // ==========================
        if (estadoActual === "esperando_qr") {

            const { data } = await getSession(id);

            if (!data?.qr)
                return;

            setQr(data.qr);

            setOpen(true);

            return;

        }

        // ==========================
        // CONECTAR
        // ==========================
        setLoading(true);

        await connectSession(id);

    }

    function textoBoton() {

        if (loading)
            return "Procesando...";

        if (estadoActual === "conectado")
            return "Desconectar";

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

                    const sesion = payload.new;

                    setEstadoActual(
                        sesion.estado
                    );

                    if (
                        sesion.estado === "esperando_qr" &&
                        sesion.qr
                    ) {

                        setQr(sesion.qr);

                        setOpen(true);

                    }

                    if (
                        sesion.estado === "conectado"
                    ) {

                        setOpen(false);

                        setQr("");

                    }

                    if (
                        sesion.estado === "desconectado"
                    ) {

                        setOpen(false);

                        setQr("");

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