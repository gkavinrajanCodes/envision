import React from 'react';
import './Timeline.css';

const roadmapData = [
  {
    id: 1,
    stage: 'January 25, 2025: Registrations Open',
    details: [
      'Kick off your journey! Sign up to join this exciting buildathon.',
    ],
  },
  {
    id: 2,
    stage: 'February 15, 2025: Registration Closes',
    details: [
      'Last chance to register! Secure your spot before time runs out.',
    ],
  },
  {
    id: 3,
    stage: 'February 17, 2025:  Role Assignment & Participant Emails',
    details: [
      'Get ready! Roles will be assigned, and participants informed.',
    ],
  },
  {
    id: 4,
    stage: 'February 19 and 20, 2025: Envision 2.0',
    details: [
      'The big days are here! Brainstorm, build, and pitch your prototype to the judges.',
    ],
  },
];

const TimelineItem = ({ stage, details }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <h3 className="timeline-stage">{stage}</h3>
        <ul className="timeline-details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className="timeline-dot"></div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="timeline-container" id="timeline">
      <div className="timeline">
        {roadmapData.map((item) => (
          <TimelineItem
            key={item.id}
            stage={item.stage}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;