import "./EventoHeader.css";

import { EventosProps } from "../types";

export default function EventoHeader({

    eventos

}:EventosProps){

    const activos=
        eventos.filter(e=>e.estado==="abierto").length;

    return(

        <header className="eventoHeader">

            <div className="headerLeft">

                <div className="iconContainer">

                    🎯

                </div>

                <div className="headerInfo">

                    <h1>

                        Eventos

                    </h1>

                    <span>

                        {eventos.length} registrado(s)

                        •

                        {activos} activo(s)

                    </span>

                </div>

            </div>

            <div className="headerRight">

                <button className="refreshButton">

                    🔄

                    <span>

                        Actualizar

                    </span>

                </button>

                <button className="newButton">

                    ➕

                    <span>

                        Nuevo Evento

                    </span>

                </button>

            </div>

        </header>

    );

}