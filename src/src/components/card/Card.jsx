import React from 'react';
import Button from '../button/Button';
import './Card.css';
import Icon from '../icon/Icon';

function Card({ title, text, ctaLabel, ctaUrl, inverted, icon }) {
  console.log('icon in Card:', icon);
  return (
    <div className={`card${inverted ? ' card--inverted' : ''}`}>
      <div className="card__header">
        <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
        {icon && (
          <div className="card__icon">
            <Icon icon={icon} />
          </div>
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
      <Button label={ctaLabel} url={ctaUrl} inverted={inverted} />
    </div>
  );
}

export default Card;
