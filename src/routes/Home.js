/**
 * @file Home.js
 * @description React route for homepage.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import WorkCard from '../components/WorkCard';

import resume from '../res/Duncan Grubbs Resume.pdf';

const Home = () => (
  <div>
    <div className="header"><span>Hi, I'm Duncan</span></div>
    <NavBar page="Home" />
    <div className="home__content">
      <div className="home__grid-item">
        <h1>About Me</h1>
        <p>
          I'm from the San Francisco Bay Area and I'm currently an undergraduate student
          at the University of Rochester pursuing a B.S.
          in Computer Science and a minor in Mathematics. I love full-stack development
          and have experience with React, Node, Redux, Polymer, MongoDB, Jest, Mocha, supertest
          and more. I also have extensive course work in Java, C, and Python including
          grammar parsing, bayesian inference, NFA->DFA convertions, and constraint satisfaction.
          You can find me on <a rel="noopenner external" href="https://github.com/duncangrubbs"> Github</a>,
          <a rel="noopenner external" href="https://www.linkedin.com/in/duncan-grubbs-01979a14a/"> LinkedIn</a>,
          <a rel="noopenner external" href="https://www.facebook.com/duncan.grubbs.7"> Facebook</a>,
          and <a rel="noopenner external" href="https://www.instagram.com/slamdunkkkkk/"> Instagram</a>.
        </p>
        <a href={resume} download target="_self" className="home__resume">
          <svg fill="#FFFFFF" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          Resumé
        </a>
      </div>
      <div className="home__grid-item">
      <h1>Example Work</h1>
      <Link to="/portfolio"><WorkCard title="BarterOut" /></Link>
      <Link to="/portfolio"><WorkCard title="Hack4Health" /></Link>
      <Link to="/portfolio"><WorkCard title="Let's Go API" /></Link>
      </div>
    </div>
  </div>
);

export default Home;
