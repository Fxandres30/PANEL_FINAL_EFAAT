import "./EventoStatsCard.css";

import EventoStatItem from "./EventoStatItem";

import { EventoProps } from "../../types";

export default function EventoStatsCard({

    evento

}: EventoProps) {

    return (

        <section className="eventoStatsCard">

            <EventoStatItem
                icon="🎟"
                titulo="Reservados"
                valor={evento.reservados ?? 0}
            />

            <EventoStatItem
                icon="✅"
                titulo="Pagados"
                valor={evento.pagados ?? 0}
            />

            <EventoStatItem
                icon="⏳"
                titulo="Pendientes"
                valor={evento.pendientes ?? 0}
            />

            <EventoStatItem
                icon="🟢"
                titulo="Libres"
                valor={evento.libres ?? 100}
            />

        </section>

    );

}