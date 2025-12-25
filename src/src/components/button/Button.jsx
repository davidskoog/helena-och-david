import React from 'react';
import './Button.css';

function Button({ label, url, inverted }) {
  return (
    <a href={url} className={`button${inverted ? ' button--inverted' : ''}`}>
      {label}
    </a>
  );
}

export default Button;
