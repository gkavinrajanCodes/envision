import React, { useState } from 'react';
import './Programs.css';
import program_1 from '../../assets/ieeecs1.png';
import program_2 from '../../assets/ieeecs2.png';
import program_3 from '../../assets/ieeecs3.png';
import program_icon_1 from '../../assets/app-development.png';
import program_icon_2 from '../../assets/graphic-designer.png';
import program_icon_3 from '../../assets/data-scientist.png';

const programDetails = [
  {
    image: program_1,
    icon: program_icon_1,
    title: 'Developer',
    description: 'As a Developer, you’ll be responsible for transforming abstract concepts into functional solutions. Your work will involve building the sturdy foundation of your back-end systems as well as crafting a smooth and responsive user experience on the front-end. You’ll collaborate with the team to design, develop and implement features, and optimize performance, contributing to building an impactful project.',
  },
  {
    image: program_2,
    icon: program_icon_2,
    title: 'Designer',
    description: 'As a Designer, you’ll be the creative force behind the project’s user experience. Your role will involve designing intuitive, visually engaging interfaces that captivate users and ensure a seamless journey. From defining the overall look and feel of the project to ensuring accessibility and usability, your creativity will bring the team’s ideas to life and make them truly resonate with the audience.',
  },
  {
    image: program_3,
    icon: program_icon_3,
    title: 'Strategist',
    description: 'As a Strategist, you’ll be the driving force behind innovative thinking and a clear vision. Your role will involve developing impactful concepts for the problem statement in hand that align with the project’s goals. Beyond brainstorming, you’ll guide the team’s approach, ensuring every decision aligns with the bigger picture. Your insights will shape the direction of the project and help turn a promising idea into a successful solution.',
  },
];

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  const handleProgramClick = (index) => {
    setActiveProgram((prevIndex) => (prevIndex === index ? null : index)); // Set the active program based on the clicked index
  };

  return (
    <div>
      <div className="programs" id="program">
        {programDetails.map((program, index) => (
          <div className="program" key={index} onClick={() => handleProgramClick(index)}>
            <img src={program.image} alt={program.title} />
            <div className="caption">
              <img src={program.icon} alt={`${program.title} icon`} />
              <p>{program.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Details Section */}
      {activeProgram !== null && (
        <div className="program-details">
          <h2>{programDetails[activeProgram].title}</h2>
          <p>{programDetails[activeProgram].description}</p>
        </div>
      )}
    </div>
  );
};

export default Programs;
