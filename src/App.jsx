import React from 'react';
import './App.css';

// Components
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <main className='main'>
      <Home />
      <Services />
      <Skills />
      <Portfolio />
    </main>
  );
};

export default App;
