"use client";

import { useEffect, useState } from "react";

import EventoCard from "../EventoCard/EventoCard";

import { obtenerEventos } from "@/services/eventos/obtenerEventos";

export default function EventoTable(){

    const [eventos,setEventos]=useState([]);

    useEffect(()=>{

        cargar();

    },[]);

    async function cargar(){

        const datos=await obtenerEventos();

        setEventos(datos);

    }

    return(

        <div className="eventoTable">

            {

                eventos.map(evento=>(

                    <EventoCard

                        key={evento.id}

                        evento={evento}

                    />

                ))

            }

        </div>

    );

}