import React from 'react';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Name. All rights reserved.</p>
      <div className="social-media">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
}
