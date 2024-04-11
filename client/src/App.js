import React from 'react';
import { About, Footer, Header, Projects, Skills } from './container';
import { Navbar } from './components';
import './App.scss';
import Experiances from './container/Experiances/Experiances';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Experiances />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
