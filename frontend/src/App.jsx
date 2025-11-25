import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NuevoPrestamo from "./pages/NuevoPrestamo";
import ListaPrestamos from "./pages/ListaPrestamos";
import StockPañol from "./pages/StockPañol";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo" element={<NuevoPrestamo />} />
        <Route path="/prestamos" element={<ListaPrestamos />} />
        <Route path="/stock" element={<StockPañol />} />
      </Routes>
    </>
  );
}
