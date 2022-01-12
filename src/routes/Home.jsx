/**
 * @file Home.jsx
 * @description React route for homepage.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.5
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <div className="home__content">
      <div className="home__grid-item">
        <div className="glass-container">
          <h1>Hey, I&apos;m Duncan</h1>
          <p>
            I&apos;m a software engineer who specializes in API design and full-stack web development.
            I previously worked at <a href="https://factba.se/">FactSquared</a> and <a href="https://www.fiscalnote.com">FiscalNote</a> as a software engineer intern
            focusing on data science. I am currently helping build <a href="https://www.flowlie.com">Flowlie</a>, an early stage
            startup creating the next generation of data infrastructure for venture fundraising.
            I love working on side projects and have experience with&nbsp;
            <a rel="noopenner external" href="https://github.com/duncangrubbs/lyrics-to-artist">Python</a>,&nbsp;
            <a rel="noopenner external" href="https://github.com/duncangrubbs/dinner-time">Typescript</a>,
            and <a rel="noopenner external" href="https://github.com/duncangrubbs/L-system">Java</a>.
            Outside of programming I enjoy UI design, DJing, cooking, and backpacking.
            You can find me on&nbsp;<a rel="noopenner external" href="https://github.com/duncangrubbs">Github</a>
            &nbsp;and&nbsp;<a rel="noopenner external" href="https://www.linkedin.com/in/duncan-grubbs-01979a14a/">LinkedIn</a>.
          </p>
          <br />
          <p>
            Feel free to reach out for freelance web development at <em>duncan.grubbs[at]gmail[dot]com</em>
          </p>
        </div>
      </div>
      <div className="home__grid-item">
      <h1>Portfolio</h1>
      <div className="portfolio__content">
        <Link to='/portfolio/barterout' className="glass-container">
          <h2>BarterOut</h2>
          <p>
            BarterOut is a web application that focuses on making peer-to-peer
            used textbook transactions easier. For the last year, I have worked
            in a small team building the client-side of the site, as well as the
            API (backend) infrastructure.
          </p>
        </Link>
        
        <Link to='/portfolio/letsgo' className="glass-container">
          <h2>Let&apos;s Go</h2>
          <p>
            Recently, I returned to a project I had started a few years
            ago with the hope of rebuilding the API in a more robust,
            clean way, while still retaining the ideas I had about
            the app in the first place. I wanted to work in a test driven
            way, focusing on making my code clean and testable.
          </p>
        </Link>
      </div>
      </div>
    </div>
  </div>
);

export default Home;
