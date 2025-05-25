import React, { useEffect, useState } from 'react';
import './Fab.css';

const trackFabClick = () => {
  if (window.gtag) {
    window.gtag('event', 'scroll_to_top', {
      event_category: 'Navigation',
      event_label: 'Till toppen',
    });
  }
};

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
      <a href="#top" className="fab" onClick={trackFabClick}>
        Till toppen
      </a>
    )
  );
};

export default Fab;
