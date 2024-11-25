import React, { useEffect } from "react";
import "../../App.css"; // Asegúrate de importar el archivo CSS

const Cursor = () => {
  useEffect(() => {
    // Crear el div para el cursor personalizado
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    // Mover el cursor con el mouse
    const moveCursor = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    // Efectos al hacer clic
    const scaleCursor = () => (cursor.style.transform = "scale(1.5)");
    const resetCursor = () => (cursor.style.transform = "scale(1)");

    // Agregar listeners
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", scaleCursor);
    document.addEventListener("mouseup", resetCursor);

    // Limpiar listeners al desmontar el componente
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", scaleCursor);
      document.removeEventListener("mouseup", resetCursor);
      cursor.remove(); // Eliminar el div al desmontar
    };
  }, []);

  return null; // No necesitas renderizar nada
};

export default Cursor;
