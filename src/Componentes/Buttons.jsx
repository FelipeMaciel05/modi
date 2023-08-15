    
// Nuevo componente BotonSubmit.js
import React from 'react';
function Fetch(event) {
  // document.getElementById("registro").addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  // Obtener los valores de los campos del formulario
  var Nombre = document.getElementById("name").value;
  var Mail = document.getElementById("email").value; 
  var ConfirmarContrasenia = document.getElementById("confirmarpassword").value;
  var Contrasenia = document.getElementById("password").value;
  var Rol = document.getElementById("rol").value;
  // Crear un objeto con los datos a enviar al backend
  var data = {
      name: Nombre,
      email: Mail,
      confirmarcontrasenia: ConfirmarContrasenia,
      contrasenia: Contrasenia,
      rol: Rol
  };
  // Enviar los datos al backend utilizando Fetch
  fetch('http://localhost:9000/api/CrearUsuario', {
    method: "POST",
    body: JSON.stringify(data),
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



const Buttons = () => {
  return (
    <div className="boton">
      <input type="submit" value="Ingresa" onClick={Fetch}/>
    </div>
  );
}
export default Buttons;
