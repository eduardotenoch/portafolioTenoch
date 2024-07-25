import React from 'react';
import './AboutMe.scss';
import { Sobremi } from '../Pages/Sobremi';

export function AboutMe() {
  return (
    <main className="main-content">
      <section id="about" className="about-section">
        <h1 className="welcome-title">Bienvenido a mi espacio</h1>
        <Sobremi />
      </section>
      <section id="projects" className="projects-section">
        <h1>Proyectos</h1>
        <p>Aquí puedes ver una muestra de mis proyectos.</p>
      </section>
      <section id="contact" className="contact-section">
        <h1>Contacto</h1>
        <p>Puedes contactarme a través de los detalles proporcionados o mediante un formulario de contacto.</p>
      </section>
    </main>
  );
}
