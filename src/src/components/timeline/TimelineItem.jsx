import React from 'react';
import Icon from '../icon/Icon';
import './TimelineItem.css';

const TimelineItem = ({ time, text, icon, reversed }) => {
  const cssClassName = reversed
    ? 'timeline-item timeline-item--reversed'
    : 'timeline-item';
  return (
    <li className={cssClassName}>
      <time className="time">{time}</time>
      <p>{text}</p>
      <Icon icon={icon} />
    </li>
  );
};

export default TimelineItem;
