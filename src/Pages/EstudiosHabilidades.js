import React, { useEffect, useState } from 'react';
import './EstudiosHabilidades.scss';

export function EstudiosHabilidades() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100); // Delay for animation
  }, []);

  return (
    <div className={`estudios-habilidades-container ${loaded ? 'loaded' : ''}`}>
      <section className="education-skills">
        <h2>Estudios y Habilidades</h2>
        <p><strong>Estudios:</strong> Me gradué del Tecnológico de Estudios Superiores de Ecatepec de la carrera de Ingeniería en Sistemas Computacionales en enero de 2024.</p>
        <p><strong>Habilidades:</strong></p>
        <ul className="skill-list">
          <li><strong>Frontend:</strong> React, React Native</li>
          <li><strong>Backend:</strong> Python, Django/Django Framework</li>
          <li><strong>DevOps:</strong> Docker</li>
          <li><strong>Base de Datos:</strong> SQL (PostgreSQL)</li>
          <li><strong>Control de Versiones:</strong> Git y GitHub</li>
          <li><strong>Otros:</strong> JavaScript</li>
        </ul>
      </section>
    </div>
  );
}
