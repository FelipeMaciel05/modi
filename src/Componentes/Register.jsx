import React from 'react';
import Buttons from "./Buttons";
import './styles/boton.css'


function Register(){

    
  
    return(
        <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Crea una cuenta</title>
      <link rel="stylesheet" href="./estilos/register.css" />
      <script src="script.js" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet" />
    </head>
    <body>
      <div className="cajamayor">
        <div className="cajaizquierda">
          <div className="img">
            <img src="/Logo bueno edicion final.png" alt="Logo"/>
          </div>
          <p>Brindando a nuestros mayores, la atención que tanto merecen</p>
        </div>
        <div className="cajaderecha">
          <div className="login">
            <form id="registro" action="" method="post">
              <h1>Create Account</h1>
              <div className="nombre">
                <input type="text" name="nombre" placeholder="Nombre Completo" id="name" />
              </div>
              <div className="email">
                <input type="email" name="usuario" placeholder="Correo Electronico" id="usuario" />
              </div>
              <div className="password">
                <input type="password" name="password" placeholder="Contraseña" id="password" />
              </div>
              <div className="confirmarpassword">
                <input type="password" name="confirmarpassword" placeholder="Confirmar Contraseña" id="confirmarpassword" />
              </div>
              <div className="rol">
                <select name="rol" id="rol">
                  <optgroup label="Elige tu Rol"></optgroup>
                  <option value="Familiar">Familiar</option>
                  <option value="Medico">Medico</option>
                  <option value="Psicologo">Psicologo</option>
                  <option value="Kinesiologo">Kinesiologo</option>
                </select>
              </div>
              <Buttons />
              <div className="text">
                <p>
                  ¿Ya tienes una cuenta? <a href="/Login">Log in</a> 
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
    </html>
    );
}

export default Register;