import React from 'react';
import './form.css';

const Formulario = () => {
  return (
    <form className="formulario">
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" />

      <label htmlFor="apellido">Apellidos:</label>
      <input type="text" id="apellido" />

      <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
      <input type="date" id="fecha_nacimiento" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;