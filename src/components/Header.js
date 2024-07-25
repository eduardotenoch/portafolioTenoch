import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import naruto from '../images/naruto.jpg';

export function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/menu'); // Redirige a la pantalla de Menu
  };

  return (
    <header className="header">
      <div className="logo">
        <img 
          src={naruto} 
          className="App-logo" 
          alt="logo" 
          onClick={handleLogoClick} 
          style={{ cursor: 'pointer' }} // Cambia el cursor para indicar que la imagen es clickeable
        />
      </div>
      <nav>
        <ul>
          <li><a href="/sobremi">Sobre mí</a></li>
          <li><a href="/estudio-habilidades">Estudio y Habilidades</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
