import "./EventoFooter.css";

import EventoActions from "../Actions/EventoActions";

export default function EventoFooter({

    evento

}){

    return(

        <footer className="eventoFooter">

            <div className="footerInfo">

                <small>

                    Detectado

                </small>

                <strong>

                    {evento.creado_en}

                </strong>

            </div>

            <EventoActions

                evento={evento}

            />

        </footer>

    );

}