import "./EventoGrupo.css";

import { EventoProps } from "../../types";

export default function EventoGrupo({

    evento

}: EventoProps){

    return(

        <section className="eventoGrupo">

            <div className="grupoCard">

                <span>

                    👥 Grupo

                </span>

                <strong>

                    {evento.grupo_nombre || "Sin nombre"}

                </strong>

            </div>

            <div className="grupoCard">

                <span>

                    🆔 ID

                </span>

                <small>

                    {evento.grupo_id}

                </small>

            </div>

            <div className="grupoCard">

                <span>

                    🤖 Bot

                </span>

                <strong>

                    {evento.telefono_bot || "-"}

                </strong>

            </div>

            <div className="grupoCard">

                <span>

                    📱 Sesión

                </span>

                <strong>

                    {evento.session_id?.slice(0,8) || "-"}

                </strong>

            </div>

            <div className="grupoCard">

                <span>

                    🚪 Grupo

                </span>

                <strong>

                    {

                        evento.abierto

                            ? "Abierto"

                            : "Cerrado"

                    }

                </strong>

            </div>

        </section>

    );

}