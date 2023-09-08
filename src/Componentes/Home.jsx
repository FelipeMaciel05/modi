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
                  <a href="/Crear">
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
      </body>
    </html>
  );
  }

export default Home;