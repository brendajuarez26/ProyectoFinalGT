import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Contenedor">
      <h1>Bienvenido al Pañol Digital</h1>
      <p>Esta aplicación web fue creada para el Pañol de mi escuela, que aun siendo orientada a la informatica sigue registrando los "prestramos" y devoluciones en papel. Espero que esta iniciativa pueda   </p>

      <div>
        <Link to="/nuevo" className="Boton">Nuevo Préstamo</Link>
        <Link to="/prestamos" className="Boton">Ver Préstamos</Link>
      </div>
    </div>
  );
}

