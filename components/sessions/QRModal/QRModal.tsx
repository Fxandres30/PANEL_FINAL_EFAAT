"use client";

import "./QRModal.css";

import { disconnectSession } from "@/services/sessions/disconnectSession";

type Props = {
    open: boolean;
    qr: string;
    sessionId: string;
    onClose: () => void;
};

export default function QRModal({

    open,
    qr,
    sessionId,
    onClose

}: Props) {

    if (!open) return null;

    async function copiarEnlace() {

        const enlace =
            `${window.location.origin}/conectar/${sessionId}`;

        await navigator.clipboard.writeText(enlace);

        alert("✅ Enlace copiado correctamente.");

    }

    async function cerrar() {

        try {

            await disconnectSession(sessionId);

        } catch (e) {

            console.error(e);

        }

        onClose();

    }

    return (

        <div className="qr-overlay">

            <div className="qr-modal">

                <div className="logo">

                    📱

                </div>

                <h2>

                    Conectar WhatsApp

                </h2>

                <p className="subtitle">

                    Escanea este código desde

                    <br />

                    <strong>

                        WhatsApp → Dispositivos vinculados

                    </strong>

                </p>

                <div className="qr-box">

                    <img

                        src={qr}

                        alt="QR"

                    />

                </div>

                <div className="status">

                    <span className="pulse"></span>

                    Esperando conexión...

                </div>

                <p className="warning">

                    El código QR cambia automáticamente cada pocos segundos.
                    <br />
                    Si expira, se actualizará sin necesidad de recargar la página.

                </p>

                <div className="buttons">

                    <button

                        className="share"

                        onClick={copiarEnlace}

                    >

                        📤 Compartir enlace

                    </button>

                    <button

                        className="close"

                        onClick={cerrar}

                    >

                        ❌ Cancelar conexión

                    </button>

                </div>

            </div>

        </div>

    );

}