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
      <section className="education-skills">
        <h2>Estudios y Habilidades</h2>
        <p><strong>Estudios:</strong> Ingeniería en Sistemas Computacionales, graduado en enero de 2024.</p>
        <p><strong>Frontend:</strong> Experto en React, Django y Python, con experiencia en creación de componentes personalizados.</p>
        <p><strong>Backend:</strong> Conocimientos en desarrollo con Python, incluyendo creación de modelos y endpoints personalizados (GET, POST).</p>
      </section>
      <section className="hobbies">
        <h2>Gustos y Hobbies</h2>
        <p><strong>Música:</strong> Me gusta mucho lo que es el género alternativo, el pop, indie.</p>
        <p><strong>Anime y Series:</strong> Aficionado a ver anime y series.</p>
        <p><strong>Explorar:</strong> Disfruto explorar lugares nuevos.</p>
        <p><strong>Objetivo:</strong> Crecer tanto personal como profesionalmente, mejorando cada día.</p>
      </section>
    </div>
  );
}
