"use client";

import "./SessionBody.css";

import { FaWhatsapp } from "react-icons/fa";

import SessionBadge from "../SessionBadge/SessionBadge";
import SessionPhone from "../SessionPhone/SessionPhone";

interface Props {

    nombre: string;

    telefono: string;

    principal: boolean;

}

export default function SessionBody({

    nombre,

    telefono,

    principal

}: Props) {

    return (

        <div className="session-body">

            <div className="session-logo">

                <FaWhatsapp />

            </div>

            <div className="session-info">

                <h3>{nombre}</h3>

                <SessionBadge principal={principal} />

            </div>

            <SessionPhone telefono={telefono} />

        </div>

    );

}