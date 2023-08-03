import React from 'react';
import Buttons, { Boton } from "./Buttons";
import './styles/boton.css'

function Home() {
  function probarFetch(){
    
// document.getElementById("registro").addEventListener("submit", function(event) {
  // event.preventDefault(); // Evitar el envío del formulario por defecto

  /*// Obtener los valores de los campos del formulario
  var nombre = document.getElementById("name").value;
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;
  var confirmarPassword = document.getElementById("confirmarpassword").value;
  var rol = document.getElementById("rol").value;

  // Crear un objeto con los datos a enviar al backend
  var data = {
      nombre: nombre,
      usuario: usuario,
      password: password,
      confirmarPassword: confirmarPassword,
      rol: rol
  };*/
  var pruebaD = {
    nombre: "juan",
    usuario: "jmm",
    password: 123,
    confirmarPassword: 123,
    rol: "usuario"
};

  // Enviar los datos al backend utilizando AJAX o Fetch
  fetch('http://localhost:9000/api/CrearUsuario', {
      method: "POST",
      body: JSON.stringify(pruebaD),
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then(function(response) {
      // Manejar la respuesta del backend
      if (response.ok) {
          // La solicitud se realizó correctamente
          // Aquí puedes redirigir al usuario o realizar alguna otra acción
          console.log(response)
      } else {
          // La solicitud falló, puedes manejar el error de alguna manera
      }
  })
  .catch(function(error) {
      // Manejar cualquier error de conexión u otro tipo de error
  });
// });


  }

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
        <button onClick={probarFetch}>Probar</button>
      </body>
    </html>
  );
}

export default Home;