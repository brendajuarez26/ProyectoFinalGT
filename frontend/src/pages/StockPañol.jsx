import { useEffect, useState } from "react";
import "../styles/StockPañol.css";

export default function StockPañol() {
  const categoriasIniciales = {
    "Herramientas": { "Regla": 10, "Compás": 5, "Tijera": 7 },
    "Dispositivos electrónicos": { "Calculadora": 5, "Tablet": 3 },
    "Papelería": { "Cuaderno": 20, "Lápiz": 30, "Bolígrafo": 25 },
  };

  const [inventario, setInventario] = useState({});
  const [editarItem, setEditarItem] = useState({ categoria: "", insumo: "", valor: 0 });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("inventario")) || categoriasIniciales;
    setInventario(stored);
    localStorage.setItem("inventario", JSON.stringify(stored));

    const actualizar = () => {
      const prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];
      const nuevoInventario = JSON.parse(JSON.stringify(stored));

      prestamos.forEach((p) => {
        for (const categoria in nuevoInventario) {
          if (nuevoInventario[categoria][p.insumo] !== undefined) {
            nuevoInventario[categoria][p.insumo] -= p.cantidad;
            if (nuevoInventario[categoria][p.insumo] < 0) nuevoInventario[categoria][p.insumo] = 0;
          }
        }
      });

      setInventario(nuevoInventario);
    };

    window.addEventListener("prestamosActualizados", actualizar);
    return () => window.removeEventListener("prestamosActualizados", actualizar);
  }, []);

  const agregarInsumo = (categoria, nombre, cantidad) => {
    if (!nombre || cantidad <= 0) return;
    const nuevoInventario = { ...inventario };
    if (nuevoInventario[categoria][nombre]) {
      nuevoInventario[categoria][nombre] += cantidad;
    } else {
      nuevoInventario[categoria][nombre] = cantidad;
    }
    setInventario(nuevoInventario);
    localStorage.setItem("inventario", JSON.stringify(nuevoInventario));
  };

  const guardarEdicion = () => {
    const nuevoInventario = { ...inventario };
    nuevoInventario[editarItem.categoria][editarItem.insumo] = editarItem.valor;
    setInventario(nuevoInventario);
    localStorage.setItem("inventario", JSON.stringify(nuevoInventario));
    setEditarItem({ categoria: "", insumo: "", valor: 0 });
  };

  return (
    <div className="stock-container">
      <h2>Stock del Pañol</h2>
      {Object.entries(inventario).map(([categoria, items]) => (
        <div key={categoria} className="categoria">
          <h3>{categoria}</h3>
          <table>
            <thead>
              <tr>
                <th>Insumo</th>
                <th>Disponibles</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(items).map(([insumo, cantidad]) => (
                <tr key={insumo}>
                  <td>{insumo}</td>
                  <td>
                    {editarItem.insumo === insumo ? (
                      <input
                        type="number"
                        value={editarItem.valor}
                        min="0"
                        onChange={(e) =>
                          setEditarItem({ ...editarItem, valor: parseInt(e.target.value) })
                        }
                      />
                    ) : (
                      cantidad
                    )}
                  </td>
                  <td>
                    {editarItem.insumo === insumo ? (
                      <button onClick={guardarEdicion}>Guardar</button>
                    ) : (
                      <button
                        onClick={() =>
                          setEditarItem({ categoria, insumo, valor: cantidad })
                        }
                      >
                        Editar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <form
            className="form-agregar"
            onSubmit={(e) => {
              e.preventDefault();
              const nombre = e.target.nombre.value.trim();
              const cantidad = parseInt(e.target.cantidad.value);
              agregarInsumo(categoria, nombre, cantidad);
              e.target.reset();
            }}
          >
            <input type="text" name="nombre" placeholder="Nombre del insumo" required />
            <input type="number" name="cantidad" placeholder="Cantidad" min="1" required />
            <button type="submit">Agregar</button>
          </form>
        </div>
      ))}
    </div>
  );
}
