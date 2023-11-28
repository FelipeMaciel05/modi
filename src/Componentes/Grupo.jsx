import React from 'react';
import Header from "./Header";
import './styles/grupo-creado.css'
import Buttons from "./Buttons";
import Cookies from 'js-cookie'
import { useState } from "react";
import { useEffect } from "react";

function Grupo() {
    const [EsMedico, setEsMedico] = useState(false);
    const [Sinopsis, setSinopsis] = useState("Apreta el boton para ver informacion");
    const [token, setToken] = useState('');
    useEffect(() => {
        handleCheckMedic();     
    }, [EsMedico]); 

    useEffect(() => {
        // Read the token from the cookie when the component mounts
        const authToken = Cookies.get('token');
        if (authToken) {
            setToken(authToken);
        }
    }, []); 
    useEffect(() => {
        console.log("Sinopsis has changed:", Sinopsis);
    }, [Sinopsis]); 
    const handleCrear = (event) => { 
        event.preventDefault(); 
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
                    console.log(response);
                } else {
                    alert("No se a podido Crear");
                }
            })
            .then(response => response.json()) // or response.json() for JSON data
            .then(data => {
                // Log the parsed data
                console.log(data); 
            });
    };

    function VerInformacion() {
        const [token, setToken] = useState('');

        useEffect(() => {
            // Read the token from the cookie when the component mounts
            const authToken = Cookies.get('token');
            if (authToken) {
                setToken(authToken);
            }
        }, []);
    }
    const handleVer = (event) => {
        event.preventDefault();
        // Enviar los datos al backend utilizando Fetch
        fetch('http://localhost:9000/InfoGrupo', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch');
            }
        })
        .then(data => {
            setSinopsis(data.sinopsis);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            setSinopsis("Error loading data");
        });}
    function CheckMedic() {
        const [token, setToken] = useState('');

        useEffect(() => {
            // Read the token from the cookie when the component mounts
            const authToken = Cookies.get('token');
            if (authToken) {
                setToken(authToken);
            }
        }, [token]);
        

        };  
        const handleCheckMedic = () => {
            // Enviar los datos al backend utilizando Fetch
            fetch('http://localhost:9000/api/CheckM', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            })
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                // Log the parsed data
                console.log(data);
                setEsMedico(data.queEs);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            }); 
} 
  
useEffect(() => {
    console.log("EsMedico has changed:", EsMedico);
}, [EsMedico]);

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

                {EsMedico ? (
                <> 
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
                                    <input type="text" placeholder="Devolucion al familiar" id="D" />
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
                                </div>
                                </form>
                            </div>
                            <div className="caja-enfermera">
                                <form method="post" className="form-de-grupo-creado">
                                    <div className="enfermera">
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
                                        <div className="caja-input-boton">
                                        <Buttons onClick={handleCrear} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>): 
                    (
                    <> 
                    <div className="primero">
                        <div className="general">
                        <div className="texto-familia"><p>Sos familiar</p></div>
                    {
                    Sinopsis === "Loading..."
                    ? <div>Loading information...</div>  // Show loading message
                    : <div className="a">{Sinopsis}</div> // Show Sinopsis content
                    }                    
                    <div className="medico-cabecera">
                     <Buttons onClick={handleVer} className="boton-familia" placeholder="Ver informacion"/>
                    </div>
                    </div>
                        </div>
                    
                    
                    </>
                    )}
                    
                </div>
            </div>
            </body>
        </html>
    );
}
export default Grupo;
