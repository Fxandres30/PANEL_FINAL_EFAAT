import "./EventoStats.css";

import { EventosProps } from "../types";

export default function EventoStats({

    eventos

}: EventosProps) {

    const activos =
        eventos.filter(e => e.estado === "abierto").length;

    const finalizados =
        eventos.filter(e => e.estado === "cerrado").length;

    const proximos =
        eventos.filter(e => e.estado === "programado").length;

    const reservados =
        eventos.reduce(
            (total, evento) =>
                total + (evento.reservados ?? 0),
            0
        );

    return (

        <section className="eventoStats">

            <div className="card">

                <span>

                    🟢 Eventos activos

                </span>

                <h2>

                    {activos}

                </h2>

            </div>

            <div className="card">

                <span>

                    ⏳ Próximos

                </span>

                <h2>

                    {proximos}

                </h2>

            </div>

            <div className="card">

                <span>

                    ✅ Finalizados

                </span>

                <h2>

                    {finalizados}

                </h2>

            </div>

            <div className="card">

                <span>

                    🎟 Reservas

                </span>

                <h2>

                    {reservados}

                </h2>

            </div>

            <div className="card">

                <span>

                    📊 Total eventos

                </span>

                <h2>

                    {eventos.length}

                </h2>

            </div>

        </section>

    );

}