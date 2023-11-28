import Buttons from "./Buttons";
import Header from "./Header";
import './styles/unirse.css'
import { useState } from "react";
import { useEffect } from "react";
import Cookies from 'js-cookie';


function Union() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Read the token from the cookie when the component mounts
    const authToken = Cookies.get('token');
    if (authToken) {
      console.log(authToken);
      setToken(authToken);
    }
  }, []);

  const handleUnion = (event) => {
    // document.getElementById("registro").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    // Obtener los valores de los campos del formulario
    var ContraG = document.getElementById("contraGrupo").value;
    var NombreP = document.getElementById("nombrePaciente").value;
    // Crear un objeto con los datos a enviar al backend
    var data = {
      nombreG: NombreP,
      Contra: ContraG,
    };
    // Enviar los datos al backend utilizando Fetch
    fetch('http://localhost:9000/api/UnirseGrupo', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token

      }
    })
      .then(function (response) {
        if (response.ok) {
          window.location.href = '/';
          console.log(response)
        } else {
          alert("No se a podido Registrar")
        }
      })
      .catch(function (error) {
        alert("No se a podido Registrar debido a un error")
      });
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Unirse a un grupo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=REM&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />

        <div className="box">
          <div className="box-textos">
            <p>Unirse a un grupo</p>
            <form action="" method="post" className="form-unirse">
              <div className="completar">
                <input type="password" placeholder="Contraseña del grupo" name="Ingrese su nombre" id="contraGrupo" />
              </div>
              <div className="completar">
                <input type="text" placeholder="Nombre del paciente" name="Ingrese su nombre" id="nombrePaciente" />
              </div>
              <div className="boton-unirse-grupo">
              <Buttons onClick={handleUnion} />
              </div>
            </form>
          </div>
        </div>

      </body>
    </html>
  );
}

export default Union;
