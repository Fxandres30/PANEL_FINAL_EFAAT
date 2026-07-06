import "./EventoHeaderCard.css";

import { EventoProps } from "../../types";

export default function EventoHeaderCard({

    evento

}: EventoProps){

    return(

        <header className="eventoHeaderCard">

            <div className="headerLeft">

                <div className={`estado ${evento.estado}`}>

                    <span className="dot"/>

                    <span>

                        {evento.estado?.toUpperCase()}

                    </span>

                </div>

                <div>

                    <h2>

                        🎯 {evento.nombre_evento}

                    </h2>

                    <small>

                        {evento.fecha_evento} • Sorteo {evento.hora_fin}

                    </small>

                </div>

            </div>

            <div className="headerRight">

                <span className="eventoId">

                    #{evento.id?.slice(0,8)}

                </span>

            </div>

        </header>

    );

}