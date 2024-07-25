import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes } from './routes/Routes';
import { Principal } from './components/Principal';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Principal />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
