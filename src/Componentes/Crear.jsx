import Header from "./Header";
import './styles/crear.css'


function Crear(){
    return(
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
                        <p>Crear un grupo</p>
                        <form action="" method="post" class="form-crear">
                            <div className="nombre-crear">
                                <input type="text" placeholder="Nombre del paciente" id="" />
                            </div>
                            <div className="descripcion-crear">
                                <input type="text" placeholder="Breve descripción del paciente y condición" id="" />
                            </div>
                            <button type="submit">Crear Grupo</button>
                        </form>
                    </div>
                </div>
        </body>
        </html>
    )
}

export default Crear;