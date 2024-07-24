import React from 'react';
import './Header.scss'

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="path/to/your/logo.svg" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
