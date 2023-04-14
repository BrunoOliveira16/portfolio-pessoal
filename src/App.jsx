import React from 'react';
import './App.css';
// Components
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <main className='main'>
      <Home />
      <Services />
    </main>
  );
};

export default App;
