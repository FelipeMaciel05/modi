import Header from "./Header";
import './styles/crear.css'
function CrearGrupo() {

  const HandleCreacion = (event) => {
    // document.getElementById("registro").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    // Obtener los valores de los campos del formulario
    var NombreGrupo = document.getElementById("name").value;
    var ContraGrupo = document.getElementById("name").value;
    var DNI = document.getElementById("name").value;
  // Crear un objeto con los datos a enviar al backend
    var data = {
      NameG: NombreGrupo,
      ContraG: ContraGrupo,
      dni: DNI,
    };
    // Enviar los datos al backend utilizando Fetch
    fetch('http://localhost:9000/api/CrearGrupo', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(function (response) {
      if (response.ok) {
        window.location.href = '/Login';
          console.log(response)
        } else {
          alert("No se a podido Crear")
        }
      })
      .catch(function (error) {
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
                                <input type="text" placeholder="Nombre del paciente" id="" />
                            </div>
                            <div className="descripcion-crear">
                                <input type="text" placeholder="Breve descripción del paciente y condición" id="" />
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
                            <button type="submit" onClick={HandleCreacion}>Crear Grupo</button>
                        </form>
                    </div>
                </div>
        </body>
        </html>
    );
  }

export default CrearGrupo;

