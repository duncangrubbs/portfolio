/**
 * @file Portfolio.js
 * @description React route for portfolio.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

const Portfolio = () => (
  <div>
    <NavBar page="Portfolio" />
    <div id="portfolio-header"><span>Portfolio</span></div>
    <div className="portfolio__content">
      <Link to='/portfolio/barterout' className="portfolio__card">
        <h1>BarterOut</h1>
        <div className="portfolio__card--desc">
          BarterOut is a web application that focuses on making peer-to-peer
          used textbook transactions easier. For the last year, I have worked
          in a small team building the client-side of the site, as well as the
          API (backend) infrastructure.
        </div>
      </Link>
      <div className="portfolio__card">
        <h1>Let&apos;s Go API</h1>
        <div className="portfolio__card--desc">
          Recently, I returned to a project I had started a few years
          ago with the hope of rebuilding the API in a more robust,
          clean way, while still retaining the ideas I had about
          the app in the first place. I wanted to work in a test driven
          way, focusing on making my code clean and testable.
        </div>
      </div>
      <div className="portfolio__card long">
        <h1>react-io</h1>
        <div className="portfolio__card--desc">
          My personal website, re-written in React, and currently under
          construction. I re-built it after wanting a smoother router
          experience, and the ability to expand heavily if I wanted to.
          Prior to this, I had an entirely static website that used
          AMP pages to provide the absolute fastest experience.
        </div>
      </div>
      <div className="portfolio__card">
        <h1>Hack4Health</h1>
        <div className="portfolio__card--desc long">
          During the 2017 Marin County Hack for Health hack-a-thon,
          my team and I built a web application that provided
          data visualization for ambulance responses times around
          the county, providing insight into some of the worst
          and best served areas, and why it might be that way.
          We parsed the data with Python, and used the D3 Javascript
          library to visualize the data.
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
