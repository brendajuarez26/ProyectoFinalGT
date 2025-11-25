import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "left", marginBottom: "20px", color: "#19115aff", fontSize: "34px" }}>
        Registrar Préstamo del Pañol
      </h2>
      <p style={{fontSize: "16px", paddingBottom: "20px"}}>Asegurate de ingresar correctamente el curso, los insumos y las fechas para que el préstamo quede cargado sin problemas. Gracias por mantener el pañol organizado.</p>

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
        onSubmit={(values) => console.log(values)}
      >
        <Form
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            backgroundColor: "#9dc3ebff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(58, 63, 65, 0.2)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
    
          <label style={label}>Nombre</label>
          <Field
            name="nombre"
            style={inputStyle}
            placeholder="Ingrese el nombre"
          />
          <ErrorMessage name="nombre" component="div" style={errorStyle} />

          <label style={label}>Apellido</label>
          <Field
            name="apellido"
            style={inputStyle}
            placeholder="Ingrese el apellido"
          />
          <ErrorMessage name="apellido" component="div" style={errorStyle} />

          <label style={label}>Curso y División</label>
          <Field as="select" name="curso" style={inputStyle}>
            <option value="">Seleccionar...</option>
            {cursos.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Field>
          <ErrorMessage name="curso" component="div" style={errorStyle} />

          <label style={label}>Quién registra el préstamo</label>
          <Field
            name="registra"
            style={inputStyle}
            placeholder="PEP / Preceptor / Profesor"
          />
          <ErrorMessage name="registra" component="div" style={errorStyle} />

          <label style={label}>Insumo</label>
          <Field
            name="insumo"
            style={inputStyle}
            placeholder="Ej: Regla, calculadora, etc."
          />
          <ErrorMessage name="insumo" component="div" style={errorStyle} />

          <label style={label}>Cantidad</label>
          <Field
            type="number"
            name="cantidad"
            style={inputStyle}
            placeholder="Ej: 1, 2, 3..."
          />
          <ErrorMessage name="cantidad" component="div" style={errorStyle} />

          <label style={label}>Fecha de retiro</label>
          <Field type="date" name="fechaRetiro" style={inputStyle} />
          <ErrorMessage name="fechaRetiro" component="div" style={errorStyle} />

          <label style={label}>Fecha de devolución</label>
          <Field type="date" name="fechaDevolucion" style={inputStyle} />
          <ErrorMessage name="fechaDevolucion" component="div" style={errorStyle} />

          <button
            type="submit"
            style={{
              backgroundColor: "#0d3046ff",
              border: "none",
              textTransform: "uppercase",
              padding: "12px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              color: "#ffffffff",
              marginTop: "10px",
            }}
          >
            Guardar Préstamo
          </button>
        </Form>
      </Formik>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "17px",
  border: "1px solid #ffffffff",
  backgroundColor: "white",
  color: "black",
  outline: "none",
  fontStyle: "italic",
};

const errorStyle = {
  color: "#ca1212ff",
  fontSize: "16px",
};

const label = {
    color: "black",
    fontFamily: "arial",
    fontSize: "16px",
}