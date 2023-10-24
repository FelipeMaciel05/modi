import React from 'react';
import Header from "./Header";
import './styles/grupo-creado.css'


function Grupo(){


    return(
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Grupo</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=REM&display=swap" rel="stylesheet" />
        </head>
        <body>
            <Header />

            <div className="grupo-total">
                <div className="caja-medicos-total">
                    <div className="1">
                    <div className="caja-medico-cabecera">
                        <form method="post" className="form-de-grupo-creado">
                            <div className="medico-cabecera">
                                <div className="texto">
                                    <p>Medico Cabecera</p>
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Diagnostico" />
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Estudio Auxiliares" />
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Indicaciones Medicas" />
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Indicaciones Enfermeria" />
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Evolucion" />
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Devolucion al familiar " />
                                </div>
                                <div className="caja-input">
                                    <input type="submit" value="Enviar" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="caja-enfermera">
                        <form method="post" className="form-de-grupo-creado">
                            <div className="enfermera">
                                <div className="texto">
                                    <p>Enfermera</p>
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Indicaciones Medicas" />
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Evolucion" />
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Devolucion al familiar" />
                                </div>
                                <div className="caja-input">
                                    <input type="submit" value="Enviar" />
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    
                    <div className="caja-kinesiologo">
                        <form method="post" className="form-de-grupo-creado">
                            <div className="kinesiologo">
                                <div className="texto">
                                    <p>Kinesiologo</p>
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Indicaciones Medicas" />
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Evolucion" />
                                </div>
                                <div className="caja-input">
                                    <input type="text" placeholder="Devolucion al familiar" />
                                </div>
                                <div className="caja-input">
                                    <input type="submit" value="Enviar" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
        </html>
    );
}

export default Grupo;