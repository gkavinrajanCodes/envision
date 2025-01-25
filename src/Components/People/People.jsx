import React from 'react';
import './People.css';

const People = () => {
  return (
    <section className="people-section">
      <div className="container">
        <h2 className="section-title">Choose Your Path</h2>
        <div className="roles-grid">
          <div className="role-card">
            <h3 className="role-title">Developer</h3>
            <p className="role-description">
              As a Developer, you'll be responsible for transforming abstract concepts into functional solutions. Your work will involve building the sturdy foundation of your back-end systems as well as crafting a smooth and responsive user experience on the front-end. You'll collaborate with the team to design, develop and implement features, and optimize performance, contributing to building an impactful project.
            </p>
            <a href="#" className="role-link">Learn More</a>
          </div>
          <div className="role-card">
            <h3 className="role-title">Designer</h3>
            <p className="role-description">
              As a Designer, you'll be the creative force behind the project's user experience. Your role will involve designing intuitive, visually engaging interfaces that captivate users and ensure a seamless journey. From defining the overall look and feel of the project to ensuring accessibility and usability, your creativity will bring the team's ideas to life and make them truly resonate with the audience.
            </p>
            <a href="#" className="role-link">Learn More</a>
          </div>
          <div className="role-card">
            <h3 className="role-title">Strategist</h3>
            <p className="role-description">
              As a Strategist, you'll be the driving force behind innovative thinking and a clear vision. Your role will involve developing impactful concepts for the problem statement in hand that align with the project's goals. Beyond brainstorming, you'll guide the team's approach, ensuring every decision aligns with the bigger picture. Your insights will shape the direction of the project and help turn a promising idea into a successful solution.
            </p>
            <a href="#" className="role-link">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;