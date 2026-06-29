"use client";

import "./SessionCard.css";

import QRModal from "../QRModal/QRModal";
import { useSession } from "./hooks/useSession";

import {
    FaWhatsapp,
    FaCrown,
    FaPhoneAlt,
    FaPowerOff,
    FaPlug
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

        cerrarQR

    } = useSession(id, estado);

    return (

        <>

            <div className="session-card">

                <div className="session-top">

                    <div className="session-logo">

                        <FaWhatsapp />

                    </div>

                    <div
                        className={`session-status ${
                            estadoActual === "conectado"
                                ? "connected"
                                : "disconnected"
                        }`}
                    >

                        <span className="pulse"></span>

                        {

                            estadoActual === "conectado"

                                ? "Conectado"

                                : "Desconectado"

                        }

                    </div>

                </div>

                <div className="session-content">

                    <h3>

                        {nombre}

                    </h3>

                    {

                        principal && (

                            <div className="principal-badge">

                                <FaCrown />

                                Principal

                            </div>

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

                <div className="session-footer">

                    <button

                        className="btn-action"

                        disabled={loading}

                        onClick={accionPrincipal}

                    >

                        {

                            estadoActual === "conectado"

                            ?

                            <>

                                <FaPowerOff />

                                Desconectar

                            </>

                            :

                            <>

                                <FaPlug />

                                Conectar

                            </>

                        }

                    </button>

                </div>

            </div>

            <QRModal

                open={open}

                qr={qr}

                sessionId={id}

                onClose={cerrarQR}

            />

        </>

    );

}