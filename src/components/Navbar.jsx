import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <h2>E.S.E.T.P N° 742 PAÑOL ESCOLAR</h2>
      <div className="Links">
        <Link to="/">Inicio</Link>
        <Link to="/nuevo">Nuevo Préstamo</Link>
        <Link to="/prestamos">Préstamos</Link>
      </div>
    </nav>
  );
}

