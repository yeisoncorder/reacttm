import React from 'react';
import './Tarjeta.css'
const Card = ({ item1 = "BBVA", item2 = "jeisoncorder" }) => {
  return (
    <div class="container">
        <div className="card">
        <h3>{item1}</h3>
        <p>{item2}</p>
        </div>
    </div>
  );
};

export default Card;