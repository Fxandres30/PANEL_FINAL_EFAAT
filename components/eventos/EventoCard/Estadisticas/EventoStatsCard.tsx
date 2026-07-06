import "./EventoStatsCard.css";

import EventoStatItem from "./EventoStatItem";

export default function EventoStatsCard({ evento }) {

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
            />que archivo te paso para mejorar 

        </section>

    );

}