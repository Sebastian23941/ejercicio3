'use client'
import { useState } from "react";
import Image from "next/image";

type ColorKey = 'gray' | 'blue' | 'red' | 'yellow' | 'green' 
export default function Colors() {
  const [color, setColor] = useState<ColorKey>("gray");
  const colors = {
    gray: "bg-gray-600",
    blue: "bg-blue-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    green: "bg-green-600"
  }

  return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center space-y-2">
      {/* Rectángulo */}
      <div className={`w-[600px] h-32 ${colors[color]}`}></div>
      {/* Botones */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <button onClick={() => setColor("red")} 
        className="w-full bg-red-600 text-white rounded px-4 py-2">
          Red
        </button>
        <button onClick={() => setColor("blue")} 
        className="w-full bg-blue-600 text-white rounded px-4 py-2">
          Blue
        </button>
      </div>

      <div className="flex flex-row space-x-2">
        <button onClick={() => setColor("yellow")} 
        className="w-full bg-yellow-600 text-white rounded px-4 py-2">
          Yellow
        </button>
        <button onClick={() => setColor("green")} 
        className="w-full bg-green-600 text-white rounded px-4 py-2">
          Green
        </button>
      </div>
    </main>
  );
}
