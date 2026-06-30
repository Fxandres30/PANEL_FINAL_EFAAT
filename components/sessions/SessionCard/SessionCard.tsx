"use client";

import { useState } from "react";

import "./SessionCard.css";

import SessionRenameModal
from "../SessionRenameModal/SessionRenameModal";

import DeleteSessionModal
from "../DeleteSessionModal/DeleteSessionModal";

import QRModal from "../QRModal/QRModal";
import SessionMenu from "../SessionMenu/SessionMenu";

import { useSession } from "./hooks/useSession";

import {
    FaWhatsapp,
    FaCrown,
    FaPhoneAlt,
    FaPowerOff,
    FaPlug,
    FaQrcode,
    FaCog
} from "react-icons/fa";

interface Props {

    id: string;

    nombre: string;

    telefono: string;

    estado: string;

    principal: boolean;

}

export default function SessionCard({

    id,

    nombre,

    telefono,

    estado,

    principal

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

        const [renameOpen, setRenameOpen] = useState(false);

const [deleteOpen, setDeleteOpen] = useState(false);


    return (

        <>

            <div className="session-card">

                {/* HEADER */}

                <div className="session-header">

                    <div
                        className={`session-status ${
                            conectado
                                ? "connected"
                                : esperandoQR
                                ? "waiting"
                                : "disconnected"
                        }`}
                    >

                        <span className="pulse"></span>

                        {

                            conectado

                                ? "Conectado"

                                : esperandoQR

                                ? "Esperando QR"

                                : "Desconectado"

                        }

                    </div>

<SessionMenu

    sessionId={id}

    nombre={nombre}

    principal={principal}

    conectado={conectado}

    esperandoQR={esperandoQR}

    onRename={() => setRenameOpen(true)}

    onDelete={() => setDeleteOpen(true)}

    onPrincipal={() => {

        // después

    }}

    onReconnect={() => {

        // después

    }}

/>

                </div>

                {/* BODY */}

                <div className="session-body">

                    <div className="session-logo">

                        <FaWhatsapp />

                    </div>

                    <h3>

                        {nombre}

                    </h3>

                    {

                        principal && (

                            <span className="badge">

                                <FaCrown />

                                Principal

                            </span>

                        )

                    }

                    <div className="phone-box">

                        <FaPhoneAlt />

                        <span>

                            {

                                telefono ||

                                "Sin conectar"

                            }

                        </span>

                    </div>

                </div>

                {/* BOTONES */}

                <div className="session-actions">

                    <button

                        className="primary-btn"

                        disabled={loading}

                        onClick={accionPrincipal}

                    >

                        {

                            conectado

                                ?

                                <>

                                    <FaPowerOff />

                                    {textoBoton()}

                                </>

                                :

                                esperandoQR

                                ?

                                <>

                                    <FaQrcode />

                                    {textoBoton()}

                                </>

                                :

                                <>

                                    <FaPlug />

                                    {textoBoton()}

                                </>

                        }

                    </button>

                    <button

                        className="secondary-btn"

                    >

                        <FaCog />

                        Administrar

                    </button>

                </div>

            </div>

            <QRModal

                open={open}

                qr={qr}

                sessionId={id}

                onClose={cerrarQR}

            />
            <SessionRenameModal

    open={renameOpen}

    sessionId={id}

    nombreActual={nombre}

    onClose={() => setRenameOpen(false)}

/>

<DeleteSessionModal

    open={deleteOpen}

    sessionId={id}

    nombre={nombre}

    onClose={() => setDeleteOpen(false)}

/>

        </>

    );

}