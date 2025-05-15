import React from 'react';
import Navigation from '../navigation/Navigation.jsx';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Navigation />
      <audio ref={audioRef} src="./media/dansband.mp3" />
    </header>
  );
};

export default Header;
