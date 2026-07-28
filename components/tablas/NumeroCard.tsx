"use client";

interface Props {

    numero: any;

    onClick: () => void;

}

export default function NumeroCard({

    numero,

    onClick

}: Props) {

    let color =
        "bg-green-500 hover:bg-green-600";

    if (numero.estado === "reservado") {

        color =
            "bg-yellow-500 hover:bg-yellow-600";

    }

    if (numero.pagado) {

        color =
            "bg-red-600 hover:bg-red-700";

    }

    return (

        <button

            id={`numero-${numero.numero}`}

            data-libre={numero.estado === "libre"}

            onClick={onClick}

            className={`
                ${color}
                h-20
                rounded-2xl
                shadow-md
                hover:shadow-xl
                hover:scale-105
                transition-all
                duration-200
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-2xl
            `}

        >

            {numero.numero}

        </button>

    );

}