import React from 'react';
import Buttons, { Boton } from "./Buttons";
import './styles/boton.css'

function Login() {
  return(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inicia Sesion</title>
        <link rel="stylesheet" href="./estilos/register.css" />
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
            <img src="/Logo bueno edicion final.png" alt="Logo" width="500vh" />
            </div>
            <p>Brindando a nuestros mayores, la atención que tanto merecen</p>
          </div>
          <div className="cajaderecha">
            <div className="login">
              <form action="" method="post">
                <h1>Log In</h1>
                <div className="email">
                  <input type="email" name="usuario" placeholder="Correo Electronico" id="" />
                </div>
                <div className="password">
                  <input type="password" name="password" placeholder="Contraseña" id="" />
                </div>
                <Buttons />
                <div className="text">
                  <p>
                    ¿No tienes cuenta? <a href="/Register">Registrate</a>
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

export default Login;
