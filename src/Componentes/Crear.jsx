import Header from "./Header";
import './styles/crear.css'


function Crear(){
    const crearGrupo = (event) => {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        // Enviar los datos al backend utilizando Fetch
        fetch('http://localhost:9000/api/crearGrupo', {
          method: "POST",
          body: JSON.stringify(),
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
                            <div className="password-crear">
                                <input type="text" placeholder="Contraseña" id="" />
                            </div>
                            <div className="dni">
                                <input type="text" placeholder="DNI" id="" />
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
                            <button type="submit" onClick={crearGrupo}>Crear Grupo</button>
                        </form>
                    </div>
                </div>
        </body>
        </html>
    )
}

export default Crear;