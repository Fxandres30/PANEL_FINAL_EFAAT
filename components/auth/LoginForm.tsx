"use client";

import "./LoginForm.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/services/auth/login";

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function iniciarSesion() {

    const { error } = await login(
      email,
      password
    );

    if (error) {

      alert(error.message);

      return;

    }

    router.push("/dashboard");

  }

  return (

    <div className="login-container">

      <div className="login-card">

        <h1 className="login-title">
          EFAAT BOTS
        </h1>

        <p className="login-subtitle">
          Inicia sesión para continuar.
        </p>

        <input
          className="login-input"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="login-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="login-button"
          onClick={iniciarSesion}
        >
          Iniciar sesión
        </button>

      </div>

    </div>

  );

}