import React from 'react';
import './styles/home.css'

function Home() {
  return(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MODI</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=REM&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header>
          <div className="caja">
              <div className="logo">
                <img src="/Logo bueno edicion final.png" alt="Logo"/>
              </div>
              <div className="item">
                <a href="#">Pagina de Inicio</a>
              </div>
              <div className="item">
                <p>Unirse/Crear grupo</p>
              </div>
              <div className="item">
                <p>Sobre Nosotros</p>
              </div>
              <div className="profile">
                <img src="/profile.png" alt="Perfil"/>
              </div>
          </div>
        </header>
        <div className="home">
          <div className="fondo">
            <div className="contenedor">
              <p>MODI</p>
              <p className="a">Tu salud en casa, nuestro compromiso constante</p>
              <button>Comenzar Ahora</button>
            </div>
          </div>
        </div>
        <div className="grupos">
          
        </div>
      </body>
    </html>
  );
}

export default Home;