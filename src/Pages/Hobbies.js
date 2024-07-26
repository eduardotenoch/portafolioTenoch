import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hobbies.scss';

// Importa las imágenes directamente
import musicaImage from '../images/musica.jpeg'; // Cambia la ruta según tu estructura de carpetas
import animeImage from '../images/pelicula.jpeg'; // Cambia la ruta según tu estructura de carpetas
import explorarImage from '../images/viaje.jpeg'; // Cambia la ruta según tu estructura de carpetas
import objetivoImage from '../images/organizativa.webp'; // Cambia la ruta según tu estructura de carpetas

const hobbiesData = [
  {
    title: 'Música',
    description: 'Me gusta mucho lo que es el género alternativo, el pop, indie.',
    image: musicaImage,
    path: '/musica' // Ruta a la que navegará
  },
  {
    title: 'Anime, Series y Peliculas',
    description: 'Aficionado a ver anime y series.',
    image: animeImage,
    path: '/anime-series' // Ruta a la que navegará
  },
  {
    title: 'Explorar',
    description: 'Disfruto explorar lugares nuevos.',
    image: explorarImage,
    path: '/explorar' // Ruta a la que navegará
  },
  {
    title: 'Objetivo',
    description: 'Crecer tanto personal como profesionalmente, mejorando cada día.',
    image: objetivoImage,
    path: '/objetivo' // Ruta a la que navegará
  },
];

export function Hobbies() {
  const navigate = useNavigate();

  return (
    <div className="hobbies-container">
      <h2>Gustos y Hobbies</h2>
      <div className="cards-container">
        {hobbiesData.map((hobby, index) => (
          <div className="card" key={index} onClick={() => navigate(hobby.path)} style={{ cursor: 'pointer' }}>
            <img src={hobby.image} alt={hobby.title} className="card-image" />
            <div className="card-content">
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
