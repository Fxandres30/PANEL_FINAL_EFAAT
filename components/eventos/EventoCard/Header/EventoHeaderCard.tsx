import "./EventoHeaderCard.css";

export default function EventoHeaderCard({

    evento

}){

    return(

        <header className="eventoHeaderCard">

            <div className="headerLeft">

                <div className={`estado ${evento.estado}`}>

                    <span className="dot"/>

                    <span>

                        {evento.estado.toUpperCase()}

                    </span>

                </div>

                <h2>

                    🎯 {evento.nombre_evento}

                </h2>

            </div>

            <div className="headerRight">

                <span>

                    #{evento.id?.slice(0,8)}

                </span>

            </div>

        </header>

    );

}