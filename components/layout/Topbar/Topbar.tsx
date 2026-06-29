"use client";

import "./Topbar.css";

export default function Topbar() {
  return (
    <header className="topbar">

      <div>
        <h2>Bienvenido 👋</h2>
        <p>Panel de administración</p>
      </div>

      <div className="topbar-user">

        <div className="avatar">
          A
        </div>

        <div>

          <strong>Andrés</strong>

          <p>Administrador</p>

        </div>

      </div>

    </header>
  );
}