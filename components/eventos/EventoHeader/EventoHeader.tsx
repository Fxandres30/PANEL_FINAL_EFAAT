import "./EventoHeader.css";

export default function EventoHeader() {

    return (

        <header className="eventoHeader">

            <div className="headerLeft">

                <div className="iconContainer">

                    🎯

                </div>

                <div>

                    <h1>

                        Eventos

                    </h1>

                    <p>

                        Administra y monitorea todos los eventos detectados por el bot.

                    </p>

                </div>

            </div>

            <div className="headerRight">

                <button className="refreshButton">

                    🔄 Actualizar

                </button>

                <button className="newButton">

                    ＋ Nuevo Evento

                </button>

            </div>

        </header>

    );

}