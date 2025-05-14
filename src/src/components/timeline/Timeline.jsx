import React from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';

const Program = () => {
  return (
    <ul className="timeline">
      <TimelineItem time="14:30" text="Samling Almedal" icon="location" />
      <TimelineItem
        time="15:00"
        text="Vigselceremoni"
        icon="rings"
        reversed={true}
      />
      <TimelineItem time="15:30" text="Brudparsskål" icon="cheers" />
      <TimelineItem
        time="16:00"
        text="Mingel och bubbel"
        icon="heart"
        reversed={true}
      />
      <TimelineItem time="17:30" text="Middag" icon="food" />
      <TimelineItem
        time="21:00"
        text="Fest och dans"
        icon="music"
        reversed={true}
      />
      <TimelineItem time="01:00" text="Nattamat" icon="cake" />
    </ul>
  );
};

export default Program;
