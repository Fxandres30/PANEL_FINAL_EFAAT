"use client";

import { use, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import "./Conectar.css";

export default function Conectar({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = use(params);

  const [qr, setQr] = useState<string | null>(null);
  const [estado, setEstado] = useState("");

  useEffect(() => {

    async function cargar() {

      const { data } = await supabase
        .from("sesiones")
        .select("qr,estado,nombre,telefono")
        .eq("id", id)
        .single();

      if (!data) return;

      setQr(data.qr);
      setEstado(data.estado);

    }

    cargar();

    const intervalo = setInterval(cargar, 1000);

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

          setQr(payload.new.qr);
          setEstado(payload.new.estado);

        }
      )
      .subscribe();

    return () => {

      clearInterval(intervalo);

      supabase.removeChannel(canal);

    };

  }, [id]);

  if (estado === "conectado") {

    return (

      <div className="success">

        <div className="success-card">

          <div className="check">

            ✅

          </div>

          <h1>

            WhatsApp conectado

          </h1>

          <p>

            La sesión fue vinculada correctamente.

          </p>

          <p>

            Ya puedes cerrar esta página.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="page">

      <div className="card">

        <h1>

          EFAAT BOTS

        </h1>

        <h2>

          Conectar WhatsApp

        </h2>

        <div className="estado">

          <span className="dot"></span>

          Esperando conexión...

        </div>

        {

          qr ?

          <img

            className="qr"

            src={qr}

            alt="QR"

          />

          :

          <div className="loading">

            Generando código QR...

          </div>

        }

        <div className="info">

          <p>

            1. Abre WhatsApp.

          </p>

          <p>

            2. Ve a <b>Dispositivos vinculados</b>.

          </p>

          <p>

            3. Pulsa <b>Vincular un dispositivo</b>.

          </p>

          <p>

            4. Escanea este código QR.

          </p>

        </div>

        <small>

          El código QR se actualiza automáticamente.

        </small>

      </div>

    </div>

  );

}