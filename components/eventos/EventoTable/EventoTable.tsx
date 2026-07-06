"use client";

import "./EventoTable.css";

import EventoCard from "../EventoCard/EventoCard";

import { EventosProps } from "../types";

export default function EventoTable({

    eventos

}: EventosProps) {

    if (eventos.length === 0) {

        return (

            <div className="eventoTableEmpty">

                <h3>

                    📭 No hay eventos

                </h3>

                <p>

                    Cuando el bot detecte un evento aparecerá aquí.

                </p>

            </div>

        );

    }

    return (

        <section className="eventoTable">

            {

                eventos.map(evento => (

                    <EventoCard

                        key={evento.id}

                        evento={evento}

                    />

                ))

            }

        </section>

    );

}