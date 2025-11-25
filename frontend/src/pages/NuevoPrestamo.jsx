import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/NuevoPrestamo.css"; 

const cursos = [
  "1°1", "1°2", "1°3",
  "2°1", "2°2", "2°3",
  "3°1", "3°2", "3°3",
  "4°1", "4°2", "4°3",
  "5°1", "5°2", "5°3",
  "6°1", "6°2", "6°3",
  "7°1", "7°2", "7°3",
];

const PrestamoSchema = Yup.object().shape({
  nombre: Yup.string().required("Ingrese un nombre*"),
  apellido: Yup.string().required("Ingrese un apellido*"),
  curso: Yup.string().required("Seleccione un Curso y División*"),
  registra: Yup.string().required("Este campo es obligatorio*"),
  insumo: Yup.string().required("Este campo es obligatorio*"),
  cantidad: Yup.number().required("Este campo es obligatorio*").positive(),
  fechaRetiro: Yup.date().required("Este campo es obligatorio*"),
  fechaDevolucion: Yup.date().required("Este campo es obligatorio*")
});

export default function NuevoPrestamo() {
  return (
    <div className="nuevo-prestamo-container">
      <h2 className="titulo">Registrar Préstamo del Pañol</h2>
      <p className="descripcion">
        Asegurate de ingresar correctamente el curso, los insumos y las fechas para que el préstamo quede cargado sin problemas.
      </p>

      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          curso: "",
          registra: "",
          insumo: "",
          cantidad: "",
          fechaRetiro: "",
          fechaDevolucion: ""
        }}
        validationSchema={PrestamoSchema}
        onSubmit={(values, { resetForm }) => {
          // Guardar en localStorage
          const prestamosGuardados = JSON.parse(localStorage.getItem("prestamos")) || [];
          const nuevoPrestamo = { ...values, id: Date.now() };
          const nuevosPrestamos = [...prestamosGuardados, nuevoPrestamo];
          localStorage.setItem("prestamos", JSON.stringify(nuevosPrestamos));

          // Enviar evento para actualizar ListaPrestamos
          window.dispatchEvent(new Event("prestamosActualizados"));

          // Limpiar formulario y mostrar alerta
          resetForm();
          alert("Préstamo guardado correctamente!");
        }}
      >
        <Form className="formulario">
          <label className="label">Nombre</label>
          <Field name="nombre" className="input" placeholder="Ingrese el nombre" />
          <ErrorMessage name="nombre" component="div" className="error" />

          <label className="label">Apellido</label>
          <Field name="apellido" className="input" placeholder="Ingrese el apellido" />
          <ErrorMessage name="apellido" component="div" className="error" />

          <label className="label">Curso y División</label>
          <Field as="select" name="curso" className="input">
            <option value="">Seleccionar...</option>
            {cursos.map(c => <option key={c} value={c}>{c}</option>)}
          </Field>
          <ErrorMessage name="curso" component="div" className="error" />

          <label className="label">Quién registra el préstamo</label>
          <Field name="registra" className="input" placeholder="PEP / Preceptor / Profesor" />
          <ErrorMessage name="registra" component="div" className="error" />

          <label className="label">Insumo</label>
          <Field name="insumo" className="input" placeholder="Ej: Regla, calculadora, etc." />
          <ErrorMessage name="insumo" component="div" className="error" />

          <label className="label">Cantidad</label>
          <Field type="number" name="cantidad" className="input" placeholder="Ej: 1, 2, 3..." />
          <ErrorMessage name="cantidad" component="div" className="error" />

          <label className="label">Fecha de retiro</label>
          <Field type="date" name="fechaRetiro" className="input" />
          <ErrorMessage name="fechaRetiro" component="div" className="error" />

          <label className="label">Fecha de devolución</label>
          <Field type="date" name="fechaDevolucion" className="input" />
          <ErrorMessage name="fechaDevolucion" component="div" className="error" />

          <button type="submit" className="boton">Guardar Préstamo</button>
        </Form>
      </Formik>
    </div>
  );
}
