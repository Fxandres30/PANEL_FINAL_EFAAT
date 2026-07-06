import "./EventoStatItem.css";

export default function EventoStatItem({

    icon,

    titulo,

    valor

}){

    return(

        <div className="eventoStatItem">

            <span>

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