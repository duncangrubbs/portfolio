/**
 * @file Home.js
 * @description React route for homepage.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';

import NavBar from '../components/NavBar';

const Home = () => (
  <div>
    <NavBar />
    <div className="home__content">
      <div className="home__grid-item">
        One
      </div>
      <div className="home__grid-item">
        Two
      </div>
      <div className="home__grid-item">
        Three
      </div>
    </div>
  </div>
);

export default Home;
