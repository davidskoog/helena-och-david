import React from 'react';
import './Hero.css';
import Navigation from '../navigation/Navigation';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Äntligen, nu är vi gifta! </h1>
        <img src="/img/wedding-couple.webp" alt="Brudparet" />
        <p>
          Ett stort tack för att ni var med och gjorde vår bröllopsdag till den
          bästa dagen ever!
        </p>
        <p>// Fru Bergander och Herr Skoog</p>
        <Navigation />
      </div>
    </section>
  );
};

export default Hero;
