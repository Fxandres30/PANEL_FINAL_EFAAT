"use client";

import { useState } from "react";

import "./SessionCard.css";

import SessionStatus from "./components/SessionStatus/SessionStatus";
import SessionBotStatus from "./components/SessionBotStatus/SessionBotStatus";
import SessionBody from "./components/SessionBody/SessionBody";
import SessionActions from "./components/SessionActions/SessionActions";
import SessionModals from "./components/SessionModals/SessionModals";

import SessionMenu from "../SessionMenu/SessionMenu";

import { useSession } from "./hooks/useSession";

import { setActiveSession } from "@/services/sessions/setActiveSession";

interface Props {

    id: string;

    nombre: string;

    telefono: string;

    estado: string;

    principal: boolean;

    activa: boolean;

}

export default function SessionCard({

    id,

    nombre,

    telefono,

    estado,

    principal,

    activa

}: Props) {

    const {

        loading,

        open,

        qr,

        estadoActual,

        accionPrincipal,

        textoBoton,

        cerrarQR

    } = useSession(id, estado);

    const conectado =
        estadoActual === "conectado";

    const esperandoQR =
        estadoActual === "esperando_qr";

    const statusClass =
        conectado
            ? "connected"
            : esperandoQR
            ? "waiting"
            : "disconnected";

    const [renameOpen, setRenameOpen] = useState(false);

    const [deleteOpen, setDeleteOpen] = useState(false);

    return (

        <>

            <div className={`session-card ${statusClass}`}>

                <div className="session-header">

                    <SessionStatus
                        conectado={conectado}
                        esperandoQR={esperandoQR}
                    />

                    <SessionMenu
                        sessionId={id}
                        nombre={nombre}
                        principal={principal}
                        conectado={conectado}
                        esperandoQR={esperandoQR}
                        activa={activa}
                        onRename={() => setRenameOpen(true)}
                        onDelete={() => setDeleteOpen(true)}
                        onPrincipal={() => {}}
                        onReconnect={() => {}}
                        onUseSession={async () => {

                            const res =
                                await setActiveSession(id);

                            console.log(res);

                        }}
                    />

                </div>

                <SessionBotStatus
                    activa={activa}
                    principal={principal}
                />

                <SessionBody
                    nombre={nombre}
                    telefono={telefono}
                    principal={principal}
                />

                <SessionActions
    conectado={conectado}
    esperandoQR={esperandoQR}
    loading={loading}
    activa={activa}
    accionPrincipal={accionPrincipal}
    textoBoton={textoBoton}
    seleccionarSesion={async () => {

        try {

            await setActiveSession(id);

            // Opcional
            window.location.reload();

        }

        catch (error) {

            console.error(error);

        }

    }}
/>

            </div>

            <SessionModals
                qrOpen={open}
                qr={qr}
                sessionId={id}
                cerrarQR={cerrarQR}
                renameOpen={renameOpen}
                deleteOpen={deleteOpen}
                nombre={nombre}
                onCloseRename={() => setRenameOpen(false)}
                onCloseDelete={() => setDeleteOpen(false)}
            />

        </>

    );

}