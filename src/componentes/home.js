import React from "react";
import "./casa.css";
import imagen from "./img/EA.png";
import imagen2 from "./img/ubi.png";
import imagen3 from "./img/acti.jpg";
import imagen4 from "./img/PS.jpg";
import imagen5 from "./img/XB.png";
import imagen6 from "./img/NS.png";
import imagen7 from "./img/arc.png";
import imagen8 from "./img/NS.png";
import imagen9 from "./img/PS.jpg";
import imagen10 from "./img/XB.jpg";
import imagen11 from "./img/icon/favicon-32x32.png";
import imagen12 from "./img/cara3.jpg";
import imagen13 from "./img/cara4.jpg";
import imagen14 from "./img/todo.jpg";
import imagen15 from "./img/vent.jpg";
import imagen16 from "./img/rep.png";



const Home =() =>{
    return(
        <div className="container">
            <body className="row">
            <section class="contenedor sobre-nosotros">
            <h2 class="titulo">Desde...</h2>
                    <div class="contenedor-sobre-nosotros">
                        <img src={imagen} alt="" class="imagen-about"></img>
                        <img src={imagen2} alt="" class="imagen-about"></img>
                        <img src={imagen3} alt="" class="imagen-about"></img>
                        <img src={imagen4} alt="" class="imagen-about"></img>
                        <img src={imagen5} alt="" class="imagen-about"></img>
                        <img src={imagen6} alt="" class="imagen-about"></img>
                    </div>
            </section>
            <section class="portafolio">
                <div class="contenedor">
                    <h2 class="titulo">Catalogo</h2>
                    <div class="galeria-port">
                        <div class="imagen-port">
                            <img src={imagen7} alt=""></img>
                            <a href="product">
                                <div class="hover-galeria">
                                    <img src={imagen11} alt=""></img>
                                    <p>Catalogo</p>
                                </div>
                            </a>
                        </div>
                        <div class="imagen-port">
                            <img src={imagen8} alt=""></img>
                            <a href="product">
                                <div class="hover-galeria">
                                    <img src={imagen11} alt=""></img>
                                    <p>Catalogo</p>
                                </div>
                            </a>
                        </div>
                        <div class="imagen-port">
                            <img src={imagen9} alt=""></img>
                            <a href="product">
                                <div class="hover-galeria">
                                    <img src={imagen11} alt=""></img>
                                    <p>Catalogo</p>
                                </div>
                            </a>
                        </div>
                        <div class="imagen-port">
                            <img src={imagen10} alt=""></img>
                            <a href="product">
                                <div class="hover-galeria">
                                    <img src={imagen11} alt=""></img>
                                    <p>Catalogo</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="clientes contenedor">
                <h2 class="opiniones">Opiniones</h2>
                <div class="cards">
                    <div class="card">
                        <img src={imagen12} alt=""></img>
                        <div class="contenido-texto-card">
                            <h4>Davis_23</h4>
                            <p>Es una gran pagina, realmente tiene mucha diversidad en los juegos que busco</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={imagen13} alt=""></img>
                        <div class="contenido-texto-card">
                            <h4>Drem</h4>
                            <p>La verdad no esperaba mucho y les hacen falta titulos pero lo reponen con los pases exclusivos</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-service">
                <div class="contenedor">
                    <h2 class="titulo">Productos</h2>
                    <div class="servicio-cont">
                        <div class="servicio-ind">
                            <img src={imagen14} alt=""></img>
                            <h3>Digitales</h3>
                            <p>Todos los juegos digitales que puedas encontrar y quieras obtener.</p>
                        </div>
                        <div class="servicio-ind">
                            <img src={imagen15} alt=""></img>
                            <h3>Equipos</h3>
                            <p>Tenemos titulos de todos las consolas que existen tanto fisicos como digitales al igual que los pases o membresias de las consolas.</p>
                        </div>
                        <div class="servicio-ind">
                            <img src={imagen16} alt=""></img>
                            <h3>Reparaciones</h3>
                            <p>Nos encargamos de la compra, venta y reparacion de consolas de todo tipo desde PC hasta consolas PS4 y Xbox One</p>
                        </div>
                    </div>
                </div>
            </section>
            </body>
            <footer>
            <div class="contenedor-footer">
                    <div class="contenedor-foo">
                        <h4>Telefono</h4>
                        <p>2221626686 o 2221548714</p>
                    </div>
                    <div class="contenedor-foo">
                        <h4>Correo</h4>
                        <p>giocriteriosgame@gmail.com o edgamezone@gmail.com</p>
                    </div>
                    <div class="contenedor-foo">
                        <h4>Localizacion</h4>
                        <p>Calle 5 Sur, Insurgentes Centro, Puebla.</p>
                    </div>
                </div>
                <h2 class="titulo-final">&copy; Criteria Desing | Morgan's & Asociados</h2>
            </footer>
        </div>
    );

}

export default Home;