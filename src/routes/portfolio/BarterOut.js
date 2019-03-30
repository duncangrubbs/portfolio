/**
 * @file BarterOut.js
 * @description React route for BarterOut.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';

import NavBar from '../../components/NavBar';

const BarterOut = () => (
  <div>
    <div id="portfolio-header"><span>My Portfolio</span></div>
    <NavBar page="Portfolio" />
    <div className="portfoliopage__content--barterout">
      <h1>BarterOut</h1>
      <p className="writing__para">
        BarterOut is a web application that focuses on making peer-to-peer
        used textbook transactions easier. For the last year, I have worked
        in a small team building the client-side of the site, as well as the
        API (backend) infrastructure.
      </p>
      <p className="writing__para">
        BarterOut was founded by Vlad Cazacu and Pavel Stan, and I joined
        the team in March 2018, providing support for the tech team,
        which at the time consisted of only one person. Within a month,
        we had a much larger team and we were looking to launch the first
        version of the site by the end of the semester.
      </p>
      <p className="writing__para">
        After a successful launch at the end of the semester, we continued working over
        the summer, implementing some key features we were missing, as well as a new design.
        We had a goal date of August 1st, 2018 to launch the next version, which was much
        more featured a smooth. Within the first week of the fall semester, we had
        grown our user base to 70+ and had completed 8+ transactions. While these
        numbers were small, it was incredible seeing what was just an idea no more
        than a year before turn into a working proof of concept that people were
        choosing to use.
      </p>
      <p className="writing__para">
        During the fall semester, we set some lofty goals for the platform. We felt
        like our code was not maintainable, efficient, tested, or even well written.
        Up until then, we were using the MERN stack: MongoDB, Express.js, React.js,
        and Node. We had used no frontend CSS or Javascript libraries beyond React
        and had written tens of thousands of lines of code to build features like
        email verification, secure authentication, password reset, and a custom admin
        dashboard. We were spending too much time on the wrong things.
      </p>
    </div>
  </div>
);

export default BarterOut;
