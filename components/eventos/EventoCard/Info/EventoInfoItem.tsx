import "./EventoInfoItem.css";

export default function EventoInfoItem({

    icon,

    titulo,

    valor

}){

    return(

        <div className="eventoInfoItem">

            <div className="top">

                <span className="icon">

                    {icon}

                </span>

                <span className="titulo">

                    {titulo}

                </span>

            </div>

            <div className="valor">

                {valor || "-"}

            </div>

        </div>

    );

}