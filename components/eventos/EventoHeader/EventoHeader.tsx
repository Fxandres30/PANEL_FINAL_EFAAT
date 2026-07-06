import "./EventoHeader.css";

import { EventosProps } from "../types";

export default function EventoHeader({

    eventos

}: EventosProps) {

    const activos =
        eventos.filter(e => e.estado === "abierto").length;

    return (

        <header className="eventoHeader">

            <div className="headerLeft">

                <div className="iconContainer">

                    🎯

                </div>

                <div>

                    <h1>

                        Eventos

                    </h1>

                    <p>

                        {eventos.length} evento(s) registrados • {activos} activo(s)

                    </p>

                </div>

            </div>

            <div className="headerRight">

                <button className="refreshButton">

                    🔄 Actualizar

                </button>

                <button className="newButton">

                    ➕ Nuevo Evento

                </button>

            </div>

        </header>

    );

}