import "./EventoInfo.css";

import EventoInfoItem from "./EventoInfoItem";

import { EventoProps } from "../../types";

export default function EventoInfo({

    evento

}: EventoProps) {

    const items = [

        {
            icon: "💰",
            titulo: "Valor",
            valor: evento.valor
        },

        {
            icon: "🎲",
            titulo: "Tabla",
            valor: evento.tabla
        },

        {
            icon: "🔢",
            titulo: "Cifras",
            valor: evento.cifras
        },

        {
            icon: "🎟",
            titulo: "Números",
            valor: evento.cantidad_numeros
        },

        {
            icon: "🕒",
            titulo: "Sorteo",
            valor: evento.hora_fin
        },

        {
            icon: "⛔",
            titulo: "Cierre",
            valor: evento.hora_cierre
        },

        {
            icon: "📅",
            titulo: "Fecha",
            valor: evento.fecha_evento
        }

    ];

    return (

        <section className="eventoInfo">

            {

                items.map((item, index) => (

                    <EventoInfoItem

                        key={index}

                        {...item}

                    />

                ))

            }

        </section>

    );

}