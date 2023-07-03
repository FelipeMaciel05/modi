import React from 'react';
import Buttons, { Boton } from "./Buttons";
import './styles/boton.css'

function Home() {
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
        <div>
            <h1>Bienvenido a Modi</h1>
            <button><a href="/Register">Register</a></button>
            <button><a href="/Login">Log in</a></button>
        </div>
      </body>
    </html>
  );
}

export default Home;