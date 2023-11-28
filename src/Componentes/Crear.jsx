import Header from "./Header";
import './styles/crear.css'
import Cookies from 'js-cookie';
import { useState } from "react";
import { useEffect } from "react";
import Buttons from "./Buttons";


function CrearGrupo() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Read the token from the cookie when the component mounts
    const authToken = Cookies.get('token');
    if (authToken) {
      console.log(authToken);
      setToken(authToken);
    }
  }, []);

  const HandleCreacion = (event) => {
 
    // document.getElementById("registro").addEventListener("submit", function (event) {
    // Obtener los valores de los campos del formulario
    event.preventDefault(); // Evitar el envío del formulario por defecto
    console.log("AAAA")
    var NombreGrupo = document.getElementById("Ngrupo").value;
    var ContraGrupo = document.getElementById("Cgrupo").value;
    var DNI = document.getElementById("Dni").value;
    // Crear un objeto con los datos a enviar al backend
    var data = {
      nombreP: NombreGrupo,
      Contra: ContraGrupo,
      Dni: DNI,
    };
    console.log(data);
    // Enviar los datos al backend utilizando Fetch 
    fetch('http://localhost:9000/api/CrearGrupo', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        if (response.ok) {
          window.location.href = '/';
          console.log(response)
        } else {
          alert("No se a podido Crear")
        }
      })
      .catch(function (error) {
        console.log(error)
        alert("No se a podido Crear debido a un error")
      });
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Crear un grupo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=REM&display=swap" rel="stylesheet" />
      </head>
      <body>

        <Header />

        <div className="caja-crear">
          <div className="caja-crear-textos">
            <p className="titulo">Crear un grupo</p>
            <form action="" method="post" class="form-crear">
              <div className="nombre-crear">
                <input type="text" placeholder="Nombre del paciente" id="Ngrupo" />
              </div>
              <div className="password-crear">
                <input type="text" placeholder="Contraseña" id="Cgrupo" />
              </div>
              <div className="dni">
                <input type="text" placeholder="DNI" id="Dni" />
              </div>
              <div className="cantidad-medicos">
                <p for="ticketNum">Medicos Cabecera:</p>
                <input id="cabecera" type="number" name="ticketNum" placeholder="0" min="1" max="2" />
              </div>
              <div className="cantidad-medicos">
                <p for="ticketNum">Enfermeras:</p>
                <input id="enfermera" type="number" name="ticketNum" placeholder="0" min="0" max="3" />
              </div>
              <div className="cantidad-medicos">
                <p for="ticketNum">Kinesiologos:</p>
                <input id="kinesiologo" type="number" name="ticketNum" placeholder="0" min="0" max="3" />
              </div>
              <div className="cantidad-medicos">
                <p for="ticketNum">Psicologos:</p>
                <input id="psicologo" type="number" name="ticketNum" placeholder="0" min="0" max="3" />
              </div>
              <button type="submit" >Crear Grupo</button>
            </form>
          </div>
          <Buttons onClick={HandleCreacion}/>
        </div>
      </body>
    </html>
  );
}

export default CrearGrupo;

