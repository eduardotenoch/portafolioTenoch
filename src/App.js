import React from 'react';
import { Header } from './components';
import { Footer } from './components';
import { AboutMe } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
