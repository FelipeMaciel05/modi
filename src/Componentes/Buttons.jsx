
// Nuevo componente BotonSubmit.js
import React from 'react';
const Buttons = ({ onClick }) => {
  return (
    <div className="boton">
      <input type="submit" value="Ingresa" onClick={onClick} />
    </div>
  );
}
export default Buttons;
