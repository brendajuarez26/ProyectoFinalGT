import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PrestamoSchema = Yup.object().shape({
  nombre: Yup.string().required("Requerido"),
  curso: Yup.string().required("Requerido"),
  elemento: Yup.string().required("Requerido"),
  cantidad: Yup.number().min(1).required("Requerido"),
  fechaRetiro: Yup.date().required("Requerido"),
  fechaDevolucion: Yup.date()
    .min(Yup.ref("fechaRetiro"), "No puede ser antes del retiro")
    .required("Requerido"),
});

export default function NuevoPrestamo() {
  return (
    <div style={styles.container}>
      <h2>Nuevo Préstamo</h2>

      <Formik
        initialValues={{
          nombre: "",
          curso: "",
          elemento: "",
          cantidad: 1,
          fechaRetiro: "",
          fechaDevolucion: "",
        }}
        validationSchema={PrestamoSchema}
        onSubmit={async (values, { resetForm }) => {
          await fetch("http://localhost:3000/prestamos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });

          alert("Préstamo registrado");
          resetForm();
        }}
      >
        <Form style={styles.form}>
          <label>Nombre del alumno</label>
          <Field name="nombre" />
          <ErrorMessage name="nombre" component="p" style={styles.error} />

          <label>Curso</label>
          <Field name="curso" />
          <ErrorMessage name="curso" component="p" style={styles.error} />

          <label>Elemento</label>
          <Field name="elemento" />
          <ErrorMessage name="elemento" component="p" style={styles.error} />

          <label>Cantidad</label>
          <Field name="cantidad" type="number" />
          <ErrorMessage name="cantidad" component="p" style={styles.error} />

          <label>Fecha de retiro</label>
          <Field name="fechaRetiro" type="date" />
          <ErrorMessage name="fechaRetiro" component="p" style={styles.error} />

          <label>Fecha de devolución</label>
          <Field name="fechaDevolucion" type="date" />
          <ErrorMessage name="fechaDevolucion" component="p" style={styles.error} />

          <button type="submit" style={styles.btn}>Guardar</button>
        </Form>
      </Formik>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "auto",
    marginTop: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  btn: {
    background: "#222",
    color: "white",
    padding: "10px",
    borderRadius: "6px",
    marginTop: "15px",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
};
