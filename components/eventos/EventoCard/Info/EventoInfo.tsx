import "./EventoInfo.css";

import EventoInfoItem from "./EventoInfoItem";

export default function EventoInfo({ evento }) {

    const items = [

        {
            icon: "💰",
            titulo: "Valor",
            valor: evento.valor
        },

        {
            icon: "🕒",
            titulo: "Sorteo",
            valor: evento.hora_fin
        },

        {
            icon: "⛔",
            titulo: "Cierre",
            valor: evento.hora_cierre
        },

        {
            icon: "📅",
            titulo: "Fecha",
            valor: evento.fecha_evento
        },

        {
            icon: "🎲",
            titulo: "Tabla",
            valor: evento.tabla
        },

        {
            icon: "🔢",
            titulo: "Tipo",
            valor: evento.cifras
                ? `${evento.cifras} cifras`
                : "2 cifras"
        }

    ];

    return (

        <section className="eventoInfo">

            {

                items.map((item,index)=>(

                    <EventoInfoItem

                        key={index}

                        {...item}

                    />

                ))

            }

        </section>

    );

}