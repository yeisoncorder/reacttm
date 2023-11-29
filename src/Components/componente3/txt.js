import React from 'react';
import './texto.css'
const Text = ({ content = "Bienvenidos al Banco Bilbao Vizcaya Argentaria Colombia S.A. BBVA es un grupo financiero global fundado en 1857 con una visión centrada en el cliente. Tiene una posición de liderazgo en el mercado español, es la mayor institución financiera de México y cuenta con franquicias líder en América del Sur. Es el primer accionista de Garanti BBVA en Turquía y posee un importante negocio de banca de inversión, transaccional y de mercados de capital en EE.UU. Con una trayectoria de más de 50 años, en Colombia BBVA se destaca como una entidad comprometida con el desarrollo económico y social del país. Con presencia en más de 122 municipios a lo largo del territorio Nacional, a través de una red de 390 sucursales, 1300 cajeros automáticos y más de 7.136 corresponsales bancarios." }) => {
  return <p class="container">{content}</p>;
  
};

export default Text;