import "./App.css";
import { Routes, Route } from "react-router-dom";
import Ruta from "./componentes/rutas";
import Login from "./componentes/registro/Login";
import Contacto from "./componentes/inicio/contacto";
import Error from "./componentes/Error/errores";
import Home from "./componentes/home";
import Producto from "./componentes/Productos/product";
import ProductoDetalle from "./componentes/Productos/productdetails";
function App() {
  return (
    <div>
      <h1>Game Zone</h1>
      <Routes>
        <Route path="/" element={<Ruta />}>
          <Route path="Login" element={<Login />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Producto />}>
            <Route path=":id" element={<ProductoDetalle />} />
        </Route>

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
