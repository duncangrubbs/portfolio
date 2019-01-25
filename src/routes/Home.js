/**
 * @file Home.js
 * @description React route for homepage.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import WritingCard from '../components/WritingCard';
import ProjectCard from '../components/ProjectCard';

import resume from '../res/Duncan Grubbs Resume.pdf';

const Home = () => (
  <div>
    <NavBar page="Home" />
    <div className="home__content">
      <div className="home__grid-item">
        <h1>About Me</h1>
        <p>
          Hello! My name is Duncan Grubbs and I am from the San Francisco Bay Area.
          I am currently an undergraduate student at the University of Rochester pursuing a B.S.
          in Computer Science and a minor in Mathematics. I love web and app
          development and have experience with Java, Javascript, C, and Python.
          My interests include Machine Learning, Cryptography, Graph Theory and
          Differential Geometry.
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
      <h1>Writing</h1>
      <Link to="/writing"><WritingCard src="something" /></Link>
      </div>
      <div className="home__grid-item">
      <h1>Technical Work</h1>
      <div className="home__projects">
        <a href="https://www.barterout.com">
          <ProjectCard _id="barterout" title="BarterOut"/>
        </a>
        <a href="https://github.com/SebastianBoyd/lettuce-go">
          <ProjectCard _id="letsgo" title="Let's Go"/>
        </a>
        <a href="https://github.com/AlexanderOtavka/square-tab">
          <ProjectCard _id="squaretab" title="Square Tab"/>
        </a>
        <a href="https://github.com/DHSDevelopersClub/hack4health">
          <ProjectCard _id="h4h" title="Hack for Health"/>
        </a>
      </div>
      </div>
    </div>
  </div>
);

export default Home;
