import "./EventoStats.css";

export default function EventoStats({

    eventos

}){

    const activos=
        eventos.filter(e=>e.estado==="abierto").length;

    const finalizados=
        eventos.filter(e=>e.estado==="cerrado").length;

    const proximos=
        eventos.filter(e=>e.estado==="programado").length;

    return(

        <div className="eventoStats">

            <div className="card">

                <h2>

                    {activos}

                </h2>

                <span>

                    Eventos activos

                </span>

            </div>

            <div className="card">

                <h2>

                    {proximos}

                </h2>

                <span>

                    Próximos

                </span>

            </div>

            <div className="card">

                <h2>

                    {finalizados}

                </h2>

                <span>

                    Finalizados

                </span>

            </div>

            <div className="card">

                <h2>

                    {eventos.length}

                </h2>

                <span>

                    Total eventos

                </span>

            </div>

        </div>

    );

}