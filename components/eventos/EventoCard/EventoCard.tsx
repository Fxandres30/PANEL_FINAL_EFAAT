import "./EventoCard.css";

import EventoHeaderCard from "./Header/EventoHeaderCard";
import EventoInfo from "./Info/EventoInfo";
import EventoGrupo from "./Grupo/EventoGrupo";
import EventoStatsCard from "./Estadisticas/EventoStatsCard";
import EventoFooter from "./Footer/EventoFooter";

import { EventoProps } from "../types";

export default function EventoCard({

    evento

}: EventoProps) {

    return (

        <article className="eventoCard">

            <EventoHeaderCard
                evento={evento}
            />

            <EventoInfo
                evento={evento}
            />

            <EventoGrupo
                evento={evento}
            />

            <EventoStatsCard
                evento={evento}
            />

            <EventoFooter
                evento={evento}
            />

        </article>

    );

}