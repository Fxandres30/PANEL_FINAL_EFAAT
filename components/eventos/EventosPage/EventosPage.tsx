"use client";

import { useEffect, useState } from "react";

import "./EventosPage.css";

import EventoHeader from "../EventoHeader/EventoHeader";
import EventoStats from "../EventoStats/EventoStats";
import EventoFilters from "../EventoFilters/EventoFilters";
import EventoTable from "../EventoTable/EventoTable";

import { obtenerEventos } from "@/services/eventos/obtenerEventos";

import { Evento } from "../types";

export default function EventosPage() {

    const [eventos, setEventos] = useState<Evento[]>([]);

    useEffect(() => {

        cargar();

    }, []);

    async function cargar() {

        const datos = await obtenerEventos();

        setEventos(datos ?? []);

    }

    return (

        <div className="eventosPage">

            <EventoHeader
                eventos={eventos}
            />

            <EventoStats
                eventos={eventos}
            />

            <EventoFilters />

            <EventoTable
                eventos={eventos}
            />

        </div>

    );

}