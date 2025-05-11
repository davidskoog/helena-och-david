import React, { useEffect, useState } from 'react';
import './Fab.css';

const Fab = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const heroHeight = hero?.offsetHeight || 0;

    const handleScroll = () => {
      if (window.scrollY > heroHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    visible && (
      <a href="#top" className="fab">
        Till toppen
      </a>
    )
  );
};

export default Fab;
