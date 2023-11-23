import React from 'react';
import Header from "./Header";
import './styles/grupo-creado.css'
import Buttons from "./Buttons";
import Cookies from 'js-cookie'
import { useState } from "react";
import { useEffect } from "react";


function Crear() {
    const [token, setToken] = useState('');

    useEffect(() => {
        // Read the token from the cookie when the component mounts
        const authToken = Cookies.get('token');
        if (authToken) {
            console.log(authToken);
            setToken(authToken);
        }
    }, []);

    const handleCrear = (event) => {
        event.preventDefault();
        console.log("AAAAAAAAAAAA")
        // document.getElementById("registro").addEventListener("submit", function (event) {
        // Obtener los valores de los campos del formulario
        var DiagnosticoP = document.getElementById("DP").value;
        var EstudioAux = document.getElementById("EA").value;
        var IndicacionesMed = document.getElementById("IM").value;
        var IndicacionesEnf = document.getElementById("IE").value;
        var EvolucionP = document.getElementById("E").value;
        var DevolucionP = document.getElementById("D").value;

        // Crear un objeto con los datos a enviar al backend
        var data = {
            Diagnostico: DiagnosticoP,
            EstudioA: EstudioAux,
            IndicacionesM: IndicacionesMed,
            IndicacionesE: IndicacionesEnf,
            Evolucion: EvolucionP,
            Devolucion: DevolucionP,

        };
        // Enviar los datos al backend utilizando Fetch
        fetch('http://localhost:9000/api/MeterInfo', {
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
                    alert("No se a podido Crear")
                }
            })
            .catch(function (error) {
                console.log(error)
                alert("No se a podido Crear debido a un error")
            });
    };

    function VerInformacion() {
        const [token, setToken] = useState('');
    
        useEffect(() => {
            // Read the token from the cookie when the component mounts
            const authToken = Cookies.get('token');
            if (authToken) {
                console.log(authToken);
                setToken(authToken);
            }
        }, []);
    
        const handleVer = (event) => {
            event.preventDefault();
            console.log("AAAAAAAAAAAA")
            // Enviar los datos al backend utilizando Fetch
            fetch('http://localhost:9000/api/InfoGrupo', {
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
                        alert("No se a podido ver")
                    }
                })
                .catch(function (error) {
                    console.log(error)
                    alert("No se a podido ver debido a un error")
                });
        };

    
    return (
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
                        <div className="primero">
                            <div className="caja-medico-cabecera">
                                <form method="post" className="form-de-grupo-creado">
                                    <div className="medico-cabecera">
                                        <div className="texto">
                                            <p>Medico Cabecera</p>
                                        </div>
                                        <div className="caja-input">
                                            <input type="text" placeholder="Diagnostico" id="DP" />
                                        </div>
                                        <div className="caja-input">
                                            <input type="text" placeholder="Estudio Auxiliares" id="EA" />
                                        </div>
                                        <div className="caja-input">
                                            <input type="text" placeholder="Indicaciones Medicas" id="IM" />
                                        </div>
                                        <div className="caja-input">
                                            <input type="text" placeholder="Indicaciones Enfermeria" id="IE" />
                                        </div>
                                        <div className="caja-input">
                                            <input type="text" placeholder="Evolucion" id="E" />
                                        </div>
                                        <div className="caja-input">
                                            <input type="text" placeholder="Devolucion al familiar " id="D" />
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
                        <div className="segundo">
                            <div className="caja-kinesiologo">
                                <form method="post" className="form-de-grupo-creado">
                                    <div className="kinesiologo">
                                        <div className="texto">
                                            <p>Kinesiologo</p>
                                        </div>
                                        <div className="caja-input">
                                            <input type="text" placeholder="Interconsulta" />
                                        </div>
                                        <div className="caja-checkbox">
                                            <div className="checkbox-interno">
                                                <p>AKM<input type="radio" name="check" id="" /></p>
                                                <p>AKR<input type="radio" name="check" id="" /></p>
                                            </div>
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
                            <div className="caja-psicologo">
                                <form className="form-de-grupo-creado">
                                    <div className="psicologo">
                                        <div className="texto">
                                            <p>Psicologo</p>
                                        </div>
                                        <div className="caja-input">
                                            <input type="text" placeholder="Interconsulta" />
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
                                        <Buttons onClick={handleCrear} />
                                        <Buttons onClick={handleVer} />

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default Crear;
