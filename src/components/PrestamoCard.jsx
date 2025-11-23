export default function PrestamoCard({ prestamo }) {
  return (
    <div style={styles.card}>
      <h3>{prestamo.elemento}</h3>
      <p><strong>Alumno:</strong> {prestamo.nombre}</p>
      <p><strong>Curso:</strong> {prestamo.curso}</p>
      <p><strong>Cantidad:</strong> {prestamo.cantidad}</p>
      <p><strong>Retiro:</strong> {prestamo.fechaRetiro}</p>
      <p><strong>Devolución:</strong> {prestamo.fechaDevolucion}</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "10px",
    background: "#f9f9f9",
  },
};
