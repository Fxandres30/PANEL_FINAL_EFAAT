"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    RotateCcw,
    Pencil,
    Share2,
    Search,
    Shuffle
} from "lucide-react";

interface Props {
    precio: number;
}

export default function Botones({ precio }: Props) {

    const router = useRouter();

    const [cargando, setCargando] = useState(false);

    async function reiniciar() {

        if (!confirm("¿Deseas reiniciar la tabla?")) return;

        setCargando(true);

        try {

            const res = await fetch("/api/tablas/reiniciar", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    precio
                })

            });

            const data = await res.json();

            if (!res.ok)
                throw new Error(data.mensaje);

            router.refresh();

        } catch (e: any) {

            alert(e.message);

        } finally {

            setCargando(false);

        }

    }

    function editar() {

        router.push(`/eventos?precio=${precio}`);

    }

    async function compartir() {

        const url = window.location.href;

        if (navigator.share) {

            await navigator.share({

                title: `Tabla $${precio}`,

                text: "Mira esta dinámica.",

                url

            });

            return;

        }

        await navigator.clipboard.writeText(url);

        alert("Enlace copiado.");

    }

    function buscar() {

        const numero = prompt("Número a buscar");

        if (!numero) return;

        const tarjeta = document.getElementById(
            `numero-${numero.padStart(2, "0")}`
        );

        if (!tarjeta) {

            alert("Número no encontrado.");

            return;

        }

        tarjeta.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

        tarjeta.classList.add("ring-4", "ring-blue-500");

        setTimeout(() => {

            tarjeta.classList.remove("ring-4", "ring-blue-500");

        }, 2500);

    }

    function aleatorio() {

        const tarjetas = document.querySelectorAll("[data-libre='true']");

        if (!tarjetas.length) {

            alert("No hay números libres.");

            return;

        }

        const random =
            tarjetas[Math.floor(Math.random() * tarjetas.length)];

        random.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

        (random as HTMLElement).click();

    }

    return (

        <div className="bg-white rounded-2xl border p-4 flex flex-wrap gap-3 shadow">

            <button
                disabled={cargando}
                onClick={reiniciar}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl"
            >
                <RotateCcw size={18}/>
                {cargando ? "Reiniciando..." : "Reiniciar"}
            </button>

            <button
                onClick={editar}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
            >
                <Pencil size={18}/>
                Editar
            </button>

            <button
                onClick={compartir}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"
            >
                <Share2 size={18}/>
                Compartir
            </button>

            <button
                onClick={aleatorio}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl"
            >
                <Shuffle size={18}/>
                Aleatorio
            </button>

            <button
                onClick={buscar}
                className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-5 py-3 rounded-xl"
            >
                <Search size={18}/>
                Buscar
            </button>

        </div>

    );

}