/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, NavLink } from "react-router-dom";
import "./ruta.css"

const Ruta = () => {
    return (
        <header>
            <nav>
            <ul>
                    <a>
                        <NavLink to="/">Home</NavLink>
                    </a>
                    <a>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </a>
                    <a>
                        <NavLink to="/Login">Registro</NavLink>
                    </a>
                    <a>
                        <NavLink to="/product">Producto</NavLink>
                    </a>
                </ul>
                <hr />
            </nav>
            <Outlet />
        </header>
    );
}

export default Ruta;

// import React from 'react';
// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
// import Registrar from './registro';
// import Contacto from './contacto';
// import './ruta.css';
// import Home from './home'

// const Ruta = () => {
//     return (
//      <>
//      <BrowserRouter>
//      <header class="nav" id="main-header">
// 		<nav>
// 			<ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link  to="/registro">Registro</Link></li>
//                 <li><Link  to="/contacto">Contacto</Link></li>
// 			</ul>
// 		</nav>
//         </header>
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="registro" element={<Registrar />} />
//           <Route path="contacto" element={<Contacto />} />
//       </Routes>
//   </BrowserRouter>
//      </>
//      );
// }
// export default Ruta;
