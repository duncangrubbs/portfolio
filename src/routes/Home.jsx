/**
 * @file Home.js
 * @description React route for homepage.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.3
 */

import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import WorkCard from '../components/WorkCard';

const Home = () => (
  <div>
    <div className="header"></div>
    <NavBar page="Home" />
    <div className="home__content">
      <div className="home__grid-item">
        <h1>Hey, I&apos;m Duncan</h1>
        <p>
          I&apos;m a senior
          at the <a rel="noopenner external" href="https://rochester.edu">University of Rochester</a>
          &nbsp;pursuing a B.S. in Computer Science and a minor in Mathematics. 
          I love working on side projects and have experience with&nbsp;
          <a rel="noopenner external" href="https://github.com/duncangrubbs/lyrics-to-artist">Python</a>,&nbsp;
          <a rel="noopenner external" href="https://github.com/BarterOut/BarterOutMain">Javascript</a>,&nbsp;
          Typescript, and <a rel="noopenner external" href="https://github.com/duncangrubbs/L-system">Java</a>.
          I am currently working as an intern
          at <a rel="noopenner external" href="https://fiscalnote.com">FiscalNote</a> in their R&amp;D/Data Science
          department. Outside of programming I enjoy UI design, DJing, playing piano, and backpacking.
          You can find me on&nbsp;<a rel="noopenner external" href="https://github.com/duncangrubbs">Github</a>
          &nbsp;and&nbsp;<a rel="noopenner external" href="https://www.linkedin.com/in/duncan-grubbs-01979a14a/">LinkedIn</a>.
        </p>
      </div>
      <div className="home__grid-item">
      <h1>Projects</h1>
      <Link to="/portfolio/barterout">
        <WorkCard
        title="BarterOut"
        text="BarterOut is a web application that focuses on making peer-to-peer
        used textbook transactions easier. For over two years, I have worked
        in a small team building the frontend and the
        API (backend) infrastructure for the application."
        />
      </Link>
      <Link to="/portfolio/letsgo">
        <WorkCard
        title="Let's Go"
        text=" Recently, I returned to a project I had started a few years
        ago with the hope of rebuilding the API in a more robust,
        clean way, while still retaining the ideas I had about
        the app in the first place. I wanted to work in a test driven
        way, focusing on making my code clean and testable."
        />
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
