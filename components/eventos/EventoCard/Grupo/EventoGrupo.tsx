import "./EventoGrupo.css";

import { EventoProps } from "../../types";

export default function EventoGrupo({

    evento

}: EventoProps){

    const items=[

        {
            icon:"👥",
            titulo:"Grupo",
            valor:evento.grupo_nombre || "Sin nombre"
        },

        {
            icon:"🆔",
            titulo:"ID",
            valor:evento.grupo_id
        },

        {
            icon:"🤖",
            titulo:"Bot",
            valor:evento.telefono_bot || "-"
        },

        {
            icon:"📱",
            titulo:"Sesión",
            valor:evento.session_id?.slice(0,8) || "-"
        },

        {
            icon:"🚪",
            titulo:"Estado",
            valor:evento.abierto ? "Abierto" : "Cerrado"
        }

    ];

    return(

        <section className="eventoGrupo">

            {

                items.map((item,index)=>(

                    <article
                        key={index}
                        className="grupoCard"
                    >

                        <div className="grupoTop">

                            <span className="grupoIcon">

                                {item.icon}

                            </span>

                            <small>

                                {item.titulo}

                            </small>

                        </div>

                        <strong>

                            {item.valor}

                        </strong>

                    </article>

                ))

            }

        </section>

    );

}