import { useEffect, useState } from "react";
import PrestamoCard from "../components/PrestamoCard";

export default function ListaPrestamos() {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/prestamos")
      .then(res => res.json())
      .then(data => setPrestamos(data));
  }, []);

  return (
    <div style={{ width: "400px", margin: "auto", marginTop: "40px" }}>
      <h2>Préstamos Registrados</h2>

      {prestamos.length === 0 ? (
        <p>No hay préstamos.</p>
      ) : (
        prestamos.map(p => (
          <PrestamoCard key={p.id} prestamo={p} />
        ))
      )}
    </div>
  );
}
