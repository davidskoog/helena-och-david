import React from 'react';
import './Navigation.css';

const trackClick = label => {
  if (window.gtag) {
    window.gtag('event', 'navigation_click', {
      event_category: 'Navigation',
      event_label: label,
    });
  }
};

const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <a href="#bilder" onClick={() => trackClick('Bilder')}>
          Bilder
        </a>
      </li>
      <li>
        <a href="#brollopsfolder" onClick={() => trackClick('Bröllopsfolder')}>
          Bröllopsfolder
        </a>
      </li>
      <li>
        <a href="#var-historia" onClick={() => trackClick('Vår historia')}>
          Vår historia
        </a>
      </li>
      <li>
        <a href="#musik" onClick={() => trackClick('Musik')}>
          Musik
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
