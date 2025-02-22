'use client'

import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [registeredName, setRegisteredName] = useState<string | null>(() => {
    return localStorage.getItem("registeredName");
  });

  useEffect(() => {
    if (registeredName) {
      localStorage.setItem("registeredName", registeredName);
    }
  }, [registeredName]);

  const validateEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!validateEmail(user.email)) {
      setError("Correo electrónico inválido");
      return;
    }

    if (!validatePassword(user.password)) {
      setError("La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial");
      return;
    }

    setRegisteredName(user.name); // Guarda solo el nombre en localStorage
    setError("");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      position: "relative",
    }}>
      {/* Nombre en la esquina superior derecha */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        fontSize: "18px",
        fontWeight: "bold",
      }}>
        {registeredName || ""}
      </div>

      {/* Contenedor del formulario */}
      <div style={{
        backgroundColor: "#2c2c2c",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        width: "300px",
        alignItems: "center",
      }}>
        <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Nombre"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            style={{ backgroundColor: "gray", color: "white", border: "none", padding: "10px", borderRadius: "4px" }}
          />
          <input
            type="email"
            placeholder="Correo"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            style={{ backgroundColor: "gray", color: "white", border: "none", padding: "10px", borderRadius: "4px" }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            style={{ backgroundColor: "gray", color: "white", border: "none", padding: "10px", borderRadius: "4px" }}
          />
          <button type="submit" style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer"
          }}>
            Aceptar
          </button>
        </form>
      </div>

      {/* Mensaje de error en la parte inferior */}
      {error && <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}
