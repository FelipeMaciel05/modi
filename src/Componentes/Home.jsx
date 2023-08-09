import React, { useState, useEffect } from 'react';
import Header from "./Header";
import './styles/home.css'


function Home() {

  const [fadeInUp, setFadeInUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.texto');
      if (element) {
        const distanceFromTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (distanceFromTop - windowHeight <= 0) {
          setFadeInUp(true);
        } else{
          setFadeInUp(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function probarFetch(event) {

    // document.getElementById("registro").addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto

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
        email: "jmm@gmail.com",
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
    // });


  }
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MODI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=REM&display=swap" rel="stylesheet" />
      </head>
      <body>

      <Header />
      
        <div className="home">
          <div className="fondo">
            <div className="contenedor">
              <p>MODI</p>
              <p className="a">Tu salud en casa, nuestro compromiso constante</p>
              <a href="#grupo"><button>Comenzar Ahora</button></a>
            </div>
          </div>
        </div>
        <div className="grupos" id="grupo">
          <div className="izq">
            <div className={`texto ${fadeInUp ? 'fade-in-up' : ''}`}>
              <div className="unirse">
                <div className="unirse-textos">
                  <p>Unirse/Crear grupo</p>
                </div>
                <div className="botones">
                  <a href="/Unirse">
                    <div className="uni">
                      <img src="/grupo.png" alt="" />
                      <p>Unirse</p>
                    </div>
                  </a>
                  <a href="/">
                    <div className="uni">
                      <img src="/mas.png" alt="" />
                      <p>Crear grupo</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {<button onClick={probarFetch}>Probar</button>}
      </body>
    </html>
  );
}

export default Home;