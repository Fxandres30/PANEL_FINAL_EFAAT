import "./EventoStatItem.css";

import { EventoStatItemProps } from "../../types";

export default function EventoStatItem({

    icon,

    titulo,

    valor

}: EventoStatItemProps) {

    return (

        <div className="eventoStatItem">

            <span className="icon">

                {icon}

            </span>

            <small>

                {titulo}

            </small>

            <strong>

                {valor}

            </strong>

        </div>

    );

}