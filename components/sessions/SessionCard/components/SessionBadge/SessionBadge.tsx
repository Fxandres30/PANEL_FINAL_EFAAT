"use client";

import "./SessionBadge.css";

import { FaCrown } from "react-icons/fa";

interface Props {

    principal: boolean;

}

export default function SessionBadge({

    principal

}: Props) {

    if (!principal) return null;

    return (

        <span className="session-badge">

            <FaCrown />

            Principal

        </span>

    );

}