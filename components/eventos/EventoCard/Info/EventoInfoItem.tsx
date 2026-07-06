import "./EventoInfoItem.css";

import { EventoInfoItemProps } from "../../types";

export default function EventoInfoItem({

    icon,

    titulo,

    valor

}: EventoInfoItemProps) {

    return (

        <article className="eventoInfoItem">

            <div className="top">

                <span className="icon">

                    {icon}

                </span>

                <span className="titulo">

                    {titulo}

                </span>

            </div>

            <strong className="valor">

                {valor ?? "-"}

            </strong>

        </article>

    );

}