import "./EventoStatsCard.css";

import EventoStatItem from "./EventoStatItem";

import { EventoProps } from "../../types";

export default function EventoStatsCard({

    evento

}: EventoProps) {

    const stats = [

        {
            icon: "🎟",
            titulo: "Reservados",
            valor: evento.reservados ?? 0
        },

        {
            icon: "✅",
            titulo: "Pagados",
            valor: evento.pagados ?? 0
        },

        {
            icon: "⏳",
            titulo: "Pendientes",
            valor: evento.pendientes ?? 0
        },

        {
            icon: "🟢",
            titulo: "Libres",
            valor: evento.libres ?? 100
        }

    ];

    return (

        <section className="eventoStatsCard">

            {

                stats.map((stat, index) => (

                    <EventoStatItem

                        key={index}

                        {...stat}

                    />

                ))

            }

        </section>

    );

}