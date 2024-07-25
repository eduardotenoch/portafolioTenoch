import React from 'react';
import foto from '../images/Captura desde 2024-07-24 18-14-15.png';
import './Sobremi.scss';

export function Sobremi() {
  return (
    <div className="sobremi-container">
      <section className="personal-info">
        <div className="text-content">
          <h2>Datos Personales</h2>
          <p><strong>Nombre:</strong> Eduardo Tenoch Zamora Cruz</p>
          <p><strong>Edad:</strong> 22 años</p>
          <p><strong>Ubicación:</strong> México</p>
        </div>
        <img src={foto} alt="foto de Eduardo Tenoch Zamora Cruz" className="profile-photo" />
      </section>
    </div>
  );
}
