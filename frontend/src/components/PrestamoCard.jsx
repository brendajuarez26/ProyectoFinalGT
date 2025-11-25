import React from "react";
import "../styles/PrestamoCard.css";

export default function PrestamoCard({ prestamo }) {
  return (
    <div className="prestamo-card">
      <h3 className="prestamo-nombre">{prestamo.nombre} {prestamo.apellido}</h3>
      <p><strong>Curso:</strong> {prestamo.curso}</p>
      <p><strong>Registrado por:</strong> {prestamo.registra}</p>
      <p><strong>Insumo prestado:</strong> <span className="insumo">{prestamo.insumo}</span></p>
      <p><strong>Cantidad:</strong> {prestamo.cantidad}</p>
      <p><strong>Fecha de retiro:</strong> {prestamo.fechaRetiro}</p>
      <p><strong>Fecha de devolución:</strong> {prestamo.fechaDevolucion}</p>
    </div>
  );
}
