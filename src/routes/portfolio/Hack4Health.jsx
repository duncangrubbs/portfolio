/**
 * @file Hack4Health.js
 * @description React route for Hack4Health.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.3
 */

import React from 'react';

import NavBar from '../../components/NavBar';
import ScrollTracker from '../../components/ScrollTracker';

const Hack4Health = () => (
  <div>
    <div className="header"></div>
    <ScrollTracker />
    <NavBar page="Portfolio" />
    <div className="portfoliopage__content--article">
      <h1><a id="barterout__heading" href="https://github.com/DHSDevelopersClub/hack4health">Hack4Health</a></h1>
      <p className="writing__para">
        During the 2017 Marin County Hack for Health hack-a-thon,
        my team and I built a web application that provided
        data visualization for ambulance responses times around
        the county, providing insight into some of the worst
        and best served areas, and why it might be that way.
        We parsed the data with Python, and used the D3 Javascript
        library to visualize the data.
      </p>
      <p className="writing__para">
        When my county announced they would be hosting a hack-a-thon
        focused on using open-source data to create solutions to
        the health problems they were facing my friends and I
        couldn't wait to go!
      </p>
      <p className="writing__para">
        After some deliberation we decided to work with the 911 calls
        database using the ZIP code information along with the ambulance
        response times to create a map that visualized the best and
        worst served areas of the county. Myself along with another team member
        focused on using Python to parse the dataset into a format the other
        half could use to build the map with D3.js.
      </p>
      <p className="writing__para">
        While the idea was simple, we ended up winning the $500 prize for best
        use of open source data, but working on a project that made an impact in the
        community was the best part.
      </p>
    </div>
  </div>
);

export default Hack4Health;
