import Header from "./Header";
import './styles/unirse.css'

function Unirse(){

    return(
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
                                <input type="text" placeholder="ID o Código del grupo" name="Ingrese su nombre" id="" />
                            </div>
                            <div className="completar">
                                <input type="text" placeholder="Nombre del paciente" name="Ingrese su nombre" id="" />
                            </div>
                            <button type="submit">Unirse</button>
                        </form>
                    </div>
                </div>

        </body>
        </html>
    );
}

export default Unirse;
