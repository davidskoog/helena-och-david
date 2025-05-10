import { useState } from 'react';
import Hero from './src/components/hero/hero';
import './App.css';
import Info from './src/components/info/Info';
import Program from './src/components/program/Program';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <Hero />
      <Program />
      <Info />
    </>
  );
}

export default App;
