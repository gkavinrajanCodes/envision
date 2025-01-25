import React from 'react';
import './Timeline.css';

const roadmapData = [
  {
    id: 1,
    stage: 'January 25: Registrations Open',
    details: [
      'The build-a-thon officially kicks off! Registrations will open. It’s time to choose your roles and dive into the challenge head-on.',
    ],
  },
  {
    id: 2,
    stage: 'February 15: Registration Closes',
    details: [
      'Don’t miss out! Make sure to register by February 15, as this is your final chance to secure a spot in the competition.',
    ],
  },
  {
    id: 3,
    stage: 'February 17: Assignment of Roles and mail participants',
    details: [
      'During this period, participants will be assigned with their respective roles based on the prefernces through mail on a first come first serve basis.',
    ],
  },
  {
    id: 4,
    stage: 'February 19 and 20: Envision 2.0 starts',
    details: [
      'Participants will come to the venue physically, network with other participants, collaborate and form teams based on mutual interest. Based on this they will build and consrtuct products with collaborted team members and --- ',
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