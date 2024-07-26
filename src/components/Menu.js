import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100); // Delay to allow CSS animation
  }, []);

  return (
    <div className={`menu ${loaded ? 'menu-loaded' : ''}`}>
      <h1 className="menu-title">Menú</h1>
      <nav className="menu-nav">
        <Link to="/sobremi" className="menu-item">Acerca de Mí</Link>
        <Link to="/EstudioHabilidades" className="menu-item">Estudios y Habilidades</Link>
        <Link to="/hobbies" className="menu-item">Hobbies</Link>
      </nav>
    </div>
  );
}
