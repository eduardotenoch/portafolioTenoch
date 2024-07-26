import React, { useEffect, useState } from 'react';
import foto from '../images/Captura desde 2024-07-24 18-14-15.png';
import './Sobremi.scss';
import cvFile from '../docs/Registro de Proyecto de Investigación Eduardo Tenoch Zamora Cruz.odt'; // Asegúrate de que la ruta sea correcta

export function Sobremi() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100); // Delay for animation
  }, []);

  return (
    <div className={`sobremi-container ${loaded ? 'loaded' : ''}`}>
      <h1 className="name-title">Eduardo Tenoch Zamora Cruz</h1>
      <h2 className="degree-title">Ing. en Sistemas Computacionales</h2> {/* Título del grado */}
      <section className="personal-info">
        <div className="text-content">
          <p>Mi nombre es Eduardo Tenoch Zamora Cruz. Nací el 22 de noviembre del 2001. 
            Terminé mi carrera en enero del 2024. Me considero una persona dedicada 
            y perfeccionista en lo que hago. Siempre busco mejorar mis habilidades 
            y adquirir nuevos conocimientos. Tengo una fuerte ética de trabajo y me 
            esfuerzo por alcanzar la excelencia en cada proyecto en el que me involucro.
          </p>
        </div>
        <img src={foto} alt="foto de Eduardo Tenoch Zamora Cruz" className="profile-photo" />
        <a href={cvFile} download className="download-button">Descargar CV</a> {/* Botón de descarga */}
      </section>
    </div>
  );
}
