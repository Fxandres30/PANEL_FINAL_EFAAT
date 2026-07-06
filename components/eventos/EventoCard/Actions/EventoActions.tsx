import "./EventoActions.css";

import { EventoProps } from "../../types";

export default function EventoActions({

    evento

}: EventoProps) {

    return (

        <div className="eventoActions">

            <button>
                👁 Ver Evento
            </button>

            <button>
                🎟 Reservas
            </button>

            <button>
                ⚙ Administrar
            </button>

        </div>

    );

}