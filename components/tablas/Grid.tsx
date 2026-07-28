"use client";

import NumeroCard from "./NumeroCard";

interface Numero {

    id: string;

    numero: string;

    estado: string;

    comprador: string | null;

    pagado: boolean;

}

interface Props {

    numeros: Numero[];

}

export default function Grid({

    numeros

}: Props) {

    function abrirNumero(numero: Numero) {

        console.log(numero);

        // Aquí después abriremos el modal

    }

    return (

        <div className="grid grid-cols-10 gap-3">

            {

                numeros.map((numero) => (

                    <NumeroCard

                        key={numero.id}

                        numero={numero}

                        onClick={() => abrirNumero(numero)}

                    />

                ))

            }

        </div>

    );

}