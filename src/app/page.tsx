'use client'
import {useState} from "react";
import Image from "next/image";

export default function Counter(){

  const [counter, setCounter] = useState(10)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter+1) 
    {/* Hace o ejecuta*/}
  }
  const decreaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter-1) 
    {/* Hace o ejecuta*/}
  }

  return (
    <main className="flex flex-col min-h-[calc(100vh-100px)] items-center justify-center space-y-2">
      <h1 className="text-4x1 font-bold text-white-800">{counter}</h1>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md px-4 py-2 "
        >
          Incrementar
        </button>
      </form>
      <form onSubmit={decreaseSubmit}>
        <button
          type="submit"
          className="w-full bg-red-600 text-white rounded-md px-4 py-2"
        >
          Restar
        </button>
      </form>
    </main>
  );
}
