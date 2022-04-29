import React from 'react';
import Header from '../components/Header';
import skills from '../imgs/skills.svg';
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
            <Tilt>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
                alt="VS Code"
              />
            </Tilt>
            <Tilt>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
              />
            </Tilt>
            <Tilt>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
            </Tilt>
            <Tilt>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                alt="HTML"
              />
            </Tilt>
            <Tilt>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                alt="CSS"
              />
            </Tilt>
            <Tilt>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                alt="JavaScript"
              />
            </Tilt>
            <Tilt>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                alt="Jest"
              />
            </Tilt>
            <Tilt>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="React"
              />
            </Tilt>
            <Tilt>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                alt="Redux"
              />
            </Tilt>
          </div>
        </section>
      </main>
    </>
  );
}

export default Skills
