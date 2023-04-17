import React from "react";
import imagen20 from "./../img/icon/android-chrome-192x192.png";
import "./contacto.css";

const Contacto =()=>{

    return(
        <form>
            <section class="contenedor nosotros">
            <h2 class="titulo">Nuestro Producto</h2>
            <div class="contenedor-nosotros">
                <img src={imagen20} alt="" class="imagen-about"></img>
                <div class="contenido-textos">
                    <h3><span>1</span>Nuestra Industria</h3>
                    <p>Nuestra empresa esta dedicada a el bienestar de nuestros clientes haciendo que obtengan juegos de mayor calidad, a menor precio y con la seguridad de tener  los productos en tiempo y forma a lo que requiere.</p>
                    <h3><span>2</span>Beneficios</h3>
                    <p>Estamos enfocados en poder hacer distintos trabajos como:</p>
                    <li>Reparcion de equipos</li>
                    <li>Venta de juegos fisicos y digitales</li>
                    <li>Venta de Membresias, Pases y Tarjetas de Regalo</li>
                    <br></br>
                    <h3><span>3</span>Promociones y Eventos</h3>
                    <p>Contamos con multiples actividades para la recreacion de comunidades y con promociones ocacionales para maximizar los visitantes y aumentar las comunidades</p>
                </div>
            </div>
            </section>
            <div>
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
        </form>
    );
}
export default Contacto;