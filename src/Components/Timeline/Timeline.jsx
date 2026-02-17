import React, { useMemo, useState } from 'react';
import './Timeline.css';

const scheduleData = {
  day1: {
    label: 'Day 1',
    date: 'February 19, 2026',
    rows: [
      { time: '8:00 AM - 9:00 AM', activity: 'Registration' },
      { time: '9:00 AM - 9:30 AM', activity: 'Opening ceremony' },
      {
        time: '9:30 AM - 10:00 AM',
        activity: 'Problem statements & sponsor pitches',
      },
      { time: '10:00 AM - 11:00 AM', activity: 'Team formation & brainstorming' },
      { time: '11:00 AM - 1:00 PM', activity: 'Hacking Session 1' },
      { time: '1:00 PM - 2:00 PM', activity: 'Lunch break' },
      { time: '2:00 PM - 3:30 PM', activity: 'Hacking Session 2' },
      { time: '3:30 PM - 4:30 PM', activity: 'Review 1' },
      { time: '4:30 PM - 4:45 PM', activity: 'Refreshments' },
      { time: '4:45 PM - 7:30 PM', activity: 'Hacking Session 3' },
      { time: '7:30 PM - 8:30 PM', activity: 'Dinner break' },
      { time: '8:30 PM - 10:00 PM', activity: 'Hacking Session 4' },
      { time: '10:00 PM - 11:00 PM', activity: 'Review Round 2 (Night)' },
    ],
  },
  day2: {
    label: 'Day 2',
    date: 'February 20, 2026',
    rows: [
      { time: '12:00 AM - 4:00 AM', activity: 'Hacking Session 5' },
      { time: '4:00 AM - 4:15 AM', activity: 'Refreshments' },
      { time: '4:15 AM - 6:00 AM', activity: 'Hacking Session 6' },
      { time: '6:00 AM - 7:00 AM', activity: 'Breakfast' },
      { time: '7:00 AM - 9:30 AM', activity: 'Hacking Session 7' },
      { time: '9:30 AM - 10:00 AM', activity: 'Code freeze & submission' },
      { time: '10:30 AM - 12:00 PM', activity: 'Final review' },
      { time: '12:00 PM - 1:00 PM', activity: 'Lunch break' },
      { time: '1:00 PM - 2:00 PM', activity: 'Powerjudging' },
      { time: '2:00 PM - 2:30 PM', activity: 'Valedictory ceremony' },
    ],
  },
};

const Timeline = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const activeSchedule = useMemo(() => scheduleData[activeDay], [activeDay]);

  return (
    <section className="timeline-container" id="timeline">
      <div className="timeline-shell">
        <header className="timeline-header">
          <div>
            <p className="timeline-kicker">Event Schedule</p>
            <h2 className="timeline-title">Timeline</h2>
            <p className="timeline-subtitle">
              {activeSchedule.label} - {activeSchedule.date}
            </p>
          </div>
          <div className="timeline-switcher" role="tablist" aria-label="Schedule days">
            {Object.entries(scheduleData).map(([key, value]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeDay === key}
                className={`timeline-switch ${activeDay === key ? 'is-active' : ''}`}
                onClick={() => setActiveDay(key)}
              >
                {value.label}
              </button>
            ))}
          </div>
        </header>

        <div className="timeline-table-wrapper" role="tabpanel">
          <table className="timeline-table">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Activity</th>
              </tr>
            </thead>
            <tbody>
              {activeSchedule.rows.map((row, index) => (
                <tr key={`${row.time}-${index}`} className="timeline-row">
                  <td className="timeline-time">{row.time}</td>
                  <td className="timeline-activity">{row.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Timeline;