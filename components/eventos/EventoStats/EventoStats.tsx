import "./EventoStats.css";

import { EventosProps } from "../types";

export default function EventoStats({

    eventos

}: EventosProps){

    const activos=
        eventos.filter(e=>e.estado==="abierto").length;

    const finalizados=
        eventos.filter(e=>e.estado==="cerrado").length;

    const proximos=
        eventos.filter(e=>e.estado==="programado").length;

    const reservados=
        eventos.reduce(
            (total,e)=>total+(e.reservados??0),
            0
        );

    const cards=[

        {
            icon:"🟢",
            titulo:"Activos",
            valor:activos
        },

        {
            icon:"⏳",
            titulo:"Próximos",
            valor:proximos
        },

        {
            icon:"✅",
            titulo:"Finalizados",
            valor:finalizados
        },

        {
            icon:"🎟",
            titulo:"Reservas",
            valor:reservados
        },

        {
            icon:"📊",
            titulo:"Eventos",
            valor:eventos.length
        }

    ];

    return(

        <section className="eventoStats">

            {

                cards.map((card,index)=>(

                    <article
                        key={index}
                        className="statCard"
                    >

                        <div className="statIcon">

                            {card.icon}

                        </div>

                        <h2>

                            {card.valor}

                        </h2>

                        <span>

                            {card.titulo}

                        </span>

                    </article>

                ))

            }

        </section>

    );

}