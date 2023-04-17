import React from "react";
import "./login.css";

function LoginPage()
{
    return(
        <div>
            <body>
                <body>
                <section class="form-register">
                <h4>Formulario</h4>
                <input class="controls" type="text" name="nombre" id="nombre" placeholder="Ingresar Nombre"></input>
                <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingresar Apellidos"></input>
                <input class="controls" type="email" name="correo" id="correo" placeholder="Ingresar Correo"></input>
                <input class="controls" type="password" name="contraseña" id="contraseña" placeholder="Ingresar Contraseña"></input>
                <a href="/"><input class="botons" type="button" value="Registrar"></input></a>
                </section>
            </body>
            <br></br>
            <br></br>
            <br></br>
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
    )
}
export default LoginPage;