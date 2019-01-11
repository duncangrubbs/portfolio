/**
 * @file Home.js
 * @description React route for homepage.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';

import NavBar from '../components/NavBar';
import WritingCard from '../components/WritingCard';

const Home = () => (
  <div>
    <NavBar page="Home" />
    <div className="home__content">
      <div className="home__grid-item">
        <h1>About</h1>
        <p>
          Hello! My name is Duncan Grubbs and I am from the San Francisco Bay Area.
          I am currently an undergraduate student at the University of Rochester pursuing a B.S.
          in Computer Science and a minor in Mathematics. I love web and app
          development and have experience with Java, Javascript, Python, C, and R.
          This website was built from scratch using React. 
          You can find me on <a rel="noopenner" href="https://github.com/duncangrubbs"> Github</a>,
          <a rel="noopenner" href="https://www.linkedin.com/in/duncan-grubbs-01979a14a/"> LinkedIn</a>,
          <a rel="noopenner" href="https://www.facebook.com/duncan.grubbs.7"> Facebook</a>,
          and <a rel="noopenner" href="https://www.instagram.com/slamdunkkkkk/"> Instagram</a>.
        </p>
      </div>
      <div className="home__grid-item">
      <h1>Writing</h1>
      <WritingCard src="something" />
      </div>
      <div className="home__grid-item">
      <h1>Work</h1>
      </div>
    </div>
  </div>
);

export default Home;
