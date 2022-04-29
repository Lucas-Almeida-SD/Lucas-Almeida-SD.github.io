import React from 'react';
import './projects.css';
import images from '../helpers/imagesImports';
import backgroundProjects from '../imgs/projects.svg';
import Tilt from 'react-vanilla-tilt';
import Header from '../components/Header';

function Projetos() {
  return (
    <>
      <Header pageSelected="PROJECTS" />
      <main className="main-projects">
        <section className="projects-section">
          <div className="projects-background-div">
            <img src={ backgroundProjects } alt="Background de Projetos" />
          </div>
          <div className="projects-div">
            {images.map((e) => (
              <div key={ e.name } className="projects-image-div">
                <a href={e.url} target="_blank" rel="noreferrer">
                  <Tilt id="vanilla-tilt-div">
                      <h3><span>{e.name}</span></h3>
                      <img
                      src={ e.src }
                      alt={ e.name }
                      />
                  </Tilt>
                </a>
              </div>
            ))}
            <div className="projects-image-div" id="more-projects">
              <a
                href="https://github.com/Lucas-Almeida-SD"
                target="_blank"
                rel="noreferrer"
              >
                <Tilt id="vanilla-tilt-div">
                  <h3>Mais Projetos</h3>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="Logo do GitHub"
                  />
                </Tilt>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Projetos;
