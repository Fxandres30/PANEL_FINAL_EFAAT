import "./EventoActions.css";

export default function EventoActions({

    evento

}){

    return(

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