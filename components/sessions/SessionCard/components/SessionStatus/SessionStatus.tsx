"use client";

import "./SessionStatus.css";

interface Props {

    conectado: boolean;

    esperandoQR: boolean;

}

export default function SessionStatus({

    conectado,

    esperandoQR

}: Props) {

    const statusClass =
        conectado
            ? "connected"
            : esperandoQR
            ? "waiting"
            : "disconnected";

    const texto =
        conectado
            ? "Conectado"
            : esperandoQR
            ? "Esperando QR"
            : "Desconectado";

    return (

        <div className={`session-status ${statusClass}`}>

            <span className="pulse"></span>

            <span className="status-text">

                {texto}

            </span>

        </div>

    );

}