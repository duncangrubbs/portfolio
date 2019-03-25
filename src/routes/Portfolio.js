/**
 * @file Portfolio.js
 * @description React route for portfolio.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';
// import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

const Portfolio = () => (
  <div>
    <NavBar page="Portfolio" />
    <div className="portfolio__content">
      <h1>Portfolio</h1>
      <div className="portfolio__card">
        <h1>BarterOut</h1>
        <div className="portfolio__card--desc">
          BarterOut is a web application that focuses on making peer-to-peer
          used textbook transactions easier. For the last year, I have worked
          in a small team building the client-side of the site, as well as the
          API (backend) infrasctructure.
        </div>
      </div>
      <div className="portfolio__card">
        <h1>Let&apos;s Go API</h1>
        <div className="portfolio__card--desc">
          Recently, I returned to a project I had started a few years
          ago with the hope of rebuilding the API in a more robust,
          clean way, while still retaining the ideas I had about
          the app in the first place. I wanted to work in a TDD way,
          focusing on making my code clean and testable.
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
