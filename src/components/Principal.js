// src/pages/Principal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Principal.scss';

export function Principal() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Menu'); // Redirige a la página de Sobre mí
  };

  return (
    <div className="principal">
      <h1>Bienvenido a Mi Sitio Web</h1>
      <p>Descubre más sobre mí y mis proyectos.</p>
      <button onClick={handleClick}>Conocer Más</button>
    </div>
  );
}
