// src/components/Footer.js
import React from 'react';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Eduardo Tenoch Zamora Cruz.</p>
      <div className="social-media">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
}
