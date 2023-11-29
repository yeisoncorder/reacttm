import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">Inicio</li>
        <li className="navbar-item">Novedades</li>
        <li className="navbar-item">Categorias</li>
        <li className="navbar-item">Menu</li>
      </ul>
    </nav>
  );
}

export default Navbar;
