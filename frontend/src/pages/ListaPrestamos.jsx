import { useEffect, useState } from "react";
import PrestamoCard from "../components/PrestamoCard";
import "../styles/ListaPrestamos.css";

export default function ListaPrestamos() {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("prestamos")) || [];
    setPrestamos(guardados);
  }, []);

  return (
    <div className="lista-prestamos-container">
      <h2 className="titulo-lista">Préstamos Registrados</h2>

      {prestamos.length === 0 ? (
        <p className="no-prestamos">No hay préstamos.</p>
      ) : (
        prestamos.map(p => <PrestamoCard key={p.id} prestamo={p} />)
      )}
    </div>
  );
}
