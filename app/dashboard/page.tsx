"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";
import { cambiarClave } from "@/services/auth/cambiarClave";
import DashboardCards from "@/components/dashboard/DashboardCards/DashboardCards";

export default function DashboardPage() {

    const [resumen, setResumen] = useState({

        bots: 0,

        sesiones: 0,

        eventos: 0,

        reservas: 0,

        clientes: 0,

        chats: 0,

        grupos: 0,

        ventas: 0

    });

    useEffect(() => {

        cargarResumen();

    }, []);

    async function actualizar() {

  const { error } = await cambiarClave("1003294080");

  if (error) {
    alert(error.message);
  } else {
    alert("Contraseña cambiada");
  }

}

    async function cargarResumen() {

        // Aquí después consultaremos Supabase

        setResumen({

            bots: 2,

            sesiones: 2,

            eventos: 5,

            reservas: 185,

            clientes: 1432,

            chats: 28,

            grupos: 84,

            ventas: 2540000

        });

    }

    return (

        <DashboardLayout>

            <DashboardCards

                resumen={resumen}

            />

            <button onClick={actualizar}>
  Cambiar contraseña
</button>

        </DashboardLayout>

    );

}