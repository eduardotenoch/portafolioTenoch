import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Cierra el menú al navegar
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleMenuToggle} style={{ cursor: 'pointer' }}>
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </div>
      {isMenuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li><a onClick={() => handleNavigation('/sobremi')}>Sobre mí</a></li>
            <li><a onClick={() => handleNavigation('/EstudioHabilidades')}>Estudios y Habilidades</a></li>
           <li><a onClick={() => handleNavigation('/hobbies')}>Hobbies</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
