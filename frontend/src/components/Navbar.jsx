import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <h2>E.S.E.T.P N° 742 PAÑOL ESCOLAR</h2>
      <div>
        <Link to="/" style={links}>Inicio</Link>
        <Link to="/nuevo" style={links}>Nuevo Préstamo</Link>
        <Link to="/prestamos" style={links}>Préstamos</Link>
        <Link to="/stock" style={links}>Stock</Link>
      </div>
    </nav>
  );
}

const links = {
    color: "blue",
    padding: "10px",
    gap: "10px",

}
