/**
 * @file Portfolio.js
 * @description React route for portfolio.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.3
 */

import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

const Portfolio = () => (
  <div>
    <div className="header"></div>
    <NavBar page="Portfolio" />
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
      
      <Link to='/portfolio/letsgo' className="portfolio__card">
        <h1>Let&apos;s Go</h1>
        <div className="portfolio__card--desc">
          Recently, I returned to a project I had started a few years
          ago with the hope of rebuilding the API in a more robust,
          clean way, while still retaining the ideas I had about
          the app in the first place. I wanted to work in a test driven
          way, focusing on making my code clean and testable.
        </div>
      </Link>
      <a 
        href="https://towardsdatascience.com/understanding-political-twitter-ce3476a38377?source=email-1002726af0c7-1588807651672-layerCake.autoLayerCakeWriterNotification-------------------------1a13eea0_4b73_4c31_9cf4_c87ffdeef3e3&sk=7dc1c4c5342b30b1796d3c7d9219b6b6"
        className="portfolio__card long"
      >
        <h1>Understanding Political Twitter</h1>
        <div className="portfolio__card--desc">
          For my final project in the 'Computational Analysis
          of Big Data' course at DIS Copenhagen, my peer and
          I wrote an article analyzing political Twitter accounts
          using sentiment and other data analysis tools in
          Python using Jupyter Notebooks. We were featured on
          Medium's 'Towards Data Science' publication.
        </div>
      </a>
      <a 
        href="https://towardsdatascience.com/finding-a-writers-style-using-neural-networks-a1c3efcb186b"
        className="portfolio__card long"
      >
        <h1>Artist from Lyrics</h1>
        <div className="portfolio__card--desc">
          For my final project in the 'Artificial Neural
          Networks and Deep Learning' class at DIS Copenhagen,
          my group and I used a neural network to predict
          that artist that wrote a song purely from the songs
          lyrics. We used an LSTM and got our data using the
          Genius lyrics API. We were published in Medium's
          'Towards Data Science' publication.
        </div>
      </a>
      <a 
        href="https://github.com/duncangrubbs/react-io"
        className="portfolio__card long"
      >
        <h1>Personal Website</h1>
        <div className="portfolio__card--desc">
          My personal website, re-written in React. I re-built it after
          wanting a smoother router
          experience, and the ability to expand heavily if I wanted to.
          Prior to this, I had an entirely static website that used
          AMP pages to provide the absolute fastest experience.
        </div>
      </a>
      <div className="portfolio__card">
        <h1>Change</h1>
        <div className="portfolio__card--desc long">
          During my freshmen year at University of Rochester,
          I worked on a student startup called Change. I joined
          a small dev team of mostly backend developers who were
          looking for someone to build the frontend of their web
          app. I used React to build a multi-page web app that
          interfaced with their API.
        </div>
      </div>
      <a 
        href="https://github.com/URSkedge/skedge_v2"
        className="portfolio__card"
      >
        <h1>UR Skedge</h1>
        <div className="portfolio__card--desc long">
          During DandyHacks (the hack-a-thon at University of Rochester)
          2018, my partner and I worked on reviving
          an old project from the University of Rochester called Skedge.
          We rebuilt the frontend in React, and updated the Ruby backend.
          We used Redux to handle state and Bootstrap for styling on
          the frontend.
        </div>
      </a>
      <a 
        href="/portfolio/hack4health"
        className="portfolio__card"
      >
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
      </a>
    </div>
  </div>
);

export default Portfolio;
