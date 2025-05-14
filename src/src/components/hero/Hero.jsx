import React from 'react';
import './Hero.css';
import Navigation from '../navigation/Navigation';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Helena & David gifter sig lördagen den <span>6 september</span>
        </h1>
        <p>
          Här hittar du allt du behöver veta – från tider och plats till vår
          historia, festens innehåll och lite praktiskt smått och gott. Kom och
          fira med oss!
        </p>
        <Navigation />
      </div>
    </section>
  );
};

export default Hero;
