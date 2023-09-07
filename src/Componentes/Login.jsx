import React from 'react';
import Buttons from "./Buttons";
import './styles/boton.css'

function Login() {
  const handleLogin = (event) => {
    // Lógica de inicio de sesión
    // document.getElementById("registro").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    // Obtener los valores de los campos del formulario
    var Maail = document.getElementById("Mail").value;
    var Password = document.getElementById("Contraseniaa").value;
    // Crear un objeto con los datos a enviar al backend
    var data = {
      email: Maail,
      contrasenia: Password,
    };
    // Enviar los datos al backend utilizando Fetch
    fetch('http://localhost:9000/api/IniciarSesion', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {
        // Manejar la respuesta del backend
        if (response.ok) {
          // La solicitud se realizó correctamente
          // Aquí puedes redirigir al usuario o realizar alguna otra acción
          console.log(response)
        } else {
          // La solicitud falló, puedes manejar el error de alguna manera
        }
      })
      .catch(function (error) {
        // Manejar cualquier error de conexión u otro tipo de error
      });

  };
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inicia Sesion</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=REM&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="cajamayor">
          <div className="cajaizquierda">
            <div className="img">
              <img src="/Logo bueno edicion final.png" alt="Logo" />
            </div>
            <p>Brindando a nuestros mayores, la atención que tanto merecen</p>
          </div>
          <div className="cajaderecha">
            <div className="login">
              <form action="" method="post">
                <h1>Log In</h1>
                <div className="email">
                  <input type="email" name="usuario" placeholder="Correo Electronico" id="Mail" />
                </div>
                <div className="password">
                  <input type="password" name="password" placeholder="Contraseña" id="Contraseniaa" />
                </div>
                <Buttons onClick={handleLogin} />
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
