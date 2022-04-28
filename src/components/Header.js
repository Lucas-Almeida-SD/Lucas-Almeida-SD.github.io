import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.css';

function Header({ pageSelected }) {
  return (
    <header>
      <h1>
        <span>{'<'}</span>
        lucasalmeida
        <span>{'/>'}</span>
      </h1>
      <nav>
        <Link 
          to="/"
          className={ pageSelected === 'HOME' ? 'selected' : null}
        >
          <span>
            Home
          </span>
        </Link>
        <Link
          to="/sobre-mim"
          className={ pageSelected === 'ABOUT' ? 'selected' : null}
        >
          <span>
            Sobre mim
          </span>
        </Link>
        <Link 
          to="/skills"
          className={ pageSelected === 'SKILLS' ? 'selected' : null}
        >
          <span>
            Skills
          </span>
        </Link>
        <Link
          to="/projetos"
          className={ pageSelected === 'PROJECTS' ? 'selected' : null}
        >
          <span>
            Projetos
          </span>
        </Link>
      </nav>
    </header>
  );
}

export default Header

Header.propTypes = {
  pageSelected: PropTypes.string.isRequired,
};
