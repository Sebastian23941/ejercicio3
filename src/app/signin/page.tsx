'use client'

/*PARA FUNCIONAR PON ESTA LINEA DE CODIGO DEL validator*/
/*npm install validator*/
//Queria usar un import del validator, pero no me jalo, asi que lo puse con require y asi si funciono

import { useEffect, useState } from "react";
const validator = require("validator");

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

  // Validar email con la librería validator
  const validateEmail = (email: string): boolean => {
    return validator.isEmail(email);
  };

  const validatePassword = (password: string): boolean => {
    return /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Errores 
    
    if (!user.name && validateEmail(user.email) && validatePassword(user.password)) {
      setError("Nombre necesitado");
      return;
    }
    
    if (user.name && !user.email && user.password) {
      setError("Correo necesitado");
      return;
    }

    if (user.name && user.email && !user.password) {
      setError("Contraseña necesitado");
      return;
    }

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

    setRegisteredName(user.name);
    setError("");
  };

  return (
    <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center",height: "100vh",position: "relative"
    }}>
      {/*Nombre en la derecha arriba*/}
      <div style={{ position: "absolute", top: "20px", right: "20px", fontSize: "18px", fontWeight: "bold" }}>
        {registeredName || ""}
      </div>

      {/*formulario*/}
      <div style={{backgroundColor: "darkgray", padding: "20px", display: "flex", flexDirection: "column", width: "300px", alignItems: "center",
      }}>
        <form onSubmit={handleSubmit} style={{width: "250px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Nombre"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            style={{ backgroundColor: "gray", color: "white", border: "none", padding: "2px", borderRadius: "4px" }}
          />
          <input
            type="email"
            placeholder="Correo"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            style={{ backgroundColor: "gray", color: "white", border: "none", padding: "2px", borderRadius: "4px" }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            style={{ backgroundColor: "gray", color: "white", border: "none", padding: "2px", borderRadius: "4px" }}
          />
          <button type="submit" style={{
            backgroundColor: "blue", color: "white", padding: "10px", cursor: "pointer"
          }}>
            Aceptar
          </button>
        </form>
      </div>

      {/*Mensaje de error*/}
      {error && <p style={{ color: "red", fontWeight: "bold"}}>{error}</p>}
    </div>
  );
}
