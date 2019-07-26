import React from 'react';

import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Location, Router } from '@reach/router';

import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/Home';
import PageNotFound from './page/PageNotFound';
import Portfolio from './portfolio/Portfolio';
import PortfolioItem from './portfolio/portfolio-item/PortfolioItem';

import './App.css';

const App = () => (
  <Location>
    {
      ({ location }) => (
        <SwitchTransition>
          <CSSTransition classNames="page-transition" key={location.key} timeout={1000}>
            <Router location={location}>
              <Home path="/" />
              <About path="/about" />
              <Contact path="/contact" />
              <Portfolio path="/portfolio" />
              <PortfolioItem path="/portfolio/:projectName" />
              <PageNotFound default />
            </Router>
          </CSSTransition>
        </SwitchTransition>
      )
    }
  </Location>
);

export default App;
