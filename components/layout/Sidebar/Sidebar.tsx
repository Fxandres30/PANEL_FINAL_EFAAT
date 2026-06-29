"use client";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="logo">
        EFAAT
      </h2>

      <nav>

        <a href="/dashboard">
          🏠 Dashboard
        </a>

        <a href="/sesiones">
          📱 Sesiones
        </a>

        <a href="/chats">
          💬 Chats
        </a>

        <a href="/clientes">
          👥 Clientes
        </a>

        <a href="/configuracion">
          ⚙ Configuración
        </a>

      </nav>

    </aside>
  );
}