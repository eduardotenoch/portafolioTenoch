import React from 'react';
import './Header.scss'
import naruto from '../images/naruto.jpg'

export function Header() {
  return (
    <header className="header">
      <div className="logo">
      <img src={naruto} className="App-logo" alt="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#Sobremi">Sobre mi</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
