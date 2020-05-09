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
    <div className="header"></div>
    <NavBar page="Home" />
    <div className="home__content">
      <div className="home__grid-item">
        <h1>Hi, I&apos;m Duncan</h1>
        <p>
          I am currently an undergraduate student
          at the University of Rochester pursuing a B.S.
          in Computer Science and a minor in Mathematics. 
          I love working on side projects and have experience at
          all levels of an applications stack. From complex frontends
          with React.js, to connecting APIs to databases, to managing
          CI/CD with Travis, Github, and Heroku.
          I have the most experience with Javascript,
          but I also have extensive course work in Java, C, and Python.
          I have taken courses on subjects including but not limited to:
          PCG, AI/Machine Learning/Big Data, Analysis of Algorithms.
          You can find me on <a rel="noopenner external" href="https://github.com/duncangrubbs"> Github</a>,
          <a rel="noopenner external" href="https://www.linkedin.com/in/duncan-grubbs-01979a14a/"> LinkedIn</a>,
          and <a rel="noopenner external" href="https://www.facebook.com/duncan.grubbs.7"> Facebook</a>.
        </p>
        <a href={resume} download target="_self" className="home__resume">
          <svg fill="#FFFFFF" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          Résumé
        </a>
      </div>
      <div className="home__grid-item">
      <h1>Example Work</h1>
      <Link to="/portfolio/barterout">
        <WorkCard
        title="BarterOut"
        text="BarterOut is a web application that focuses on making peer-to-peer
        used textbook transactions easier. For the last year, I have worked
        in a small team building the client-side of the site, as well as the
        API (backend) infrastructure. "/>
      </Link>
      <Link to="/portfolio/letsgo">
        <WorkCard
        title="Let's Go"
        text=" Recently, I returned to a project I had started a few years
          ago with the hope of rebuilding the API in a more robust,
          clean way, while still retaining the ideas I had about
          the app in the first place. I wanted to work in a test driven
          way, focusing on making my code clean and testable."/>
      </Link>
      <Link to="/portfolio">
        <WorkCard
        title="Understanding Political Twitter"
        text="For my final project in the 'Computational Analysis
        of Big Data' course at DIS Copenhagen, my peer and
        I wrote an article analyzing political Twitter accounts
        using sentiment and other data analysis tools in
        Python using Jupyter Notebooks. We were featured on
        Medium's 'Towards Data Science' publication."
        />
      </Link>
      <Link to="/portfolio">
        <WorkCard
        title="Artist from Lyrics"
        text="For my final project in the 'Artificial Neural
        Networks and Deep Learning' class at DIS Copenhagen,
        my group and I used a neural network to predict
        that artist that wrote a song purely from the songs
        lyrics. We used an LSTM and got our data using the
        Genius lyrics API. We were published in Medium's
        'Towards Data Science' publication."
        />
      </Link>
      <Link to="/portfolio">See more</Link>
      </div>
    </div>
  </div>
);

export default Home;
