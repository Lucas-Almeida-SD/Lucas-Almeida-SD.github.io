import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/About';
import Skills from './pages/Skills';
import Projetos from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/sobre-mim" component={ Sobre } />
        <Route exact path="/skills" component={ Skills } />
        <Route exact path="/projetos" component={ Projetos } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
