import React from 'react';
import './AbaoutMe.scss';

export function AboutMe() {
  return (
    <main className="main-content">
      <section id="about">
        <h1>About Me</h1>
        <p>Brief introduction about yourself.</p>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <p>Showcase your projects here.</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>Provide your contact details or a contact form.</p>
      </section>
    </main>
  );
}
