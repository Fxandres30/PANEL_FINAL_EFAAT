import "./EventoHeaderCard.css";

import { EventoProps } from "../../types";

export default function EventoHeaderCard({

    evento

}: EventoProps){

    return(

        <header className="eventoHeaderCard">

            <div className="eventoTop">

                <div className={`estado ${evento.estado}`}>

                    <span className="dot"></span>

                    <span>

                        {evento.estado?.toUpperCase()}

                    </span>

                </div>

                <span className="eventoId">

                    #{evento.id?.slice(0,8)}

                </span>

            </div>

            <h2 className="eventoTitulo">

                🎯 {evento.nombre_evento}

            </h2>

            <small className="eventoFecha">

                📅 {evento.fecha_evento}

                <span>•</span>

                🕒 {evento.hora_fin}

            </small>

        </header>

    );

}