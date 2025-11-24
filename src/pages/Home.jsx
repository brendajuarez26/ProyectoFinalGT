import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{justifyContent: "center", alignItems: "center", textAlign: "center"}}>
      <h1 style={{fontSize: "34px"}}> 🛠️ Bienvenido al Pañol Digital</h1>
      <p style={
        {width: "60%",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        margin: "0 auto",
        paddingBottom: "30px"}
        }>
        Esta aplicación web fue creada para el Pañol de mi escuela, que aun siendo orientada a la informatica sigue registrando los "prestramos" y devoluciones en papel. Espero que esta iniciativa pueda incentivar a los estudiantes que quedan en la escuela a terminar este proyecto o crear el suyo, siempre buscando mejorar o actualizar las cosas en la escuela que ya quedaron viejitas  </p>

      <div>
        <Link to="/nuevo" style={buttonStyle}>Nuevo Préstamo</Link>
        <Link to="/prestamos" style={buttonStyle}>Ver Préstamos</Link>
      </div>
    </div>
  );
}

const buttonStyle = {
    backgroundColor: "#003366", 
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    margin: "10px",
    width: "200px",
};
