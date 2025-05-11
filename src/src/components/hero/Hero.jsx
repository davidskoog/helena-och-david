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
          Vi hoppas att ni kan vara med och fira tillsammans med oss. Vigseln
          börjar kl 15.00 och därefter fortsätter bröllopsfesten med middag,
          dans och karaoke!
        </p>
        <Navigation />
      </div>
    </section>
  );
};

export default Hero;
