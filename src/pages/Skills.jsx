import React from 'react';
import Header from '../components/Header';
import skills from '../imgs/skills.svg';
import myskills from '../helpers/mySkills';
import Tilt from 'react-vanilla-tilt';
import './skills.css';

function Skills() {
  return (
    <>
      <Header  pageSelected="SKILLS" />
      <main className="main-skills">
        <section className="skills-section">
          <div className="background-skills">
            <img src={ skills } alt="Skills" />
          </div>
          <div className="skills-div">
            {myskills.map((skill) => (
              <Tilt key={skill.title}>
              <img
                src={skill.url}
                alt={skill.title}
                title={skill.title}
              />
            </Tilt>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Skills
