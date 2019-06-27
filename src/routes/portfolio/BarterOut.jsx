/**
 * @file BarterOut.js
 * @description React route for BarterOut.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';

import NavBar from '../../components/NavBar';

import barterout from '../../res/images/barterout.png';

const BarterOut = () => (
  <div>
    <div className="header"></div>
    <NavBar page="Portfolio" />
    <div className="portfoliopage__content--barterout">
      <h1><a id="barterout__heading" href="https://github.com/BarterOut">BarterOut</a></h1>
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
      <img alt="barterout" src={barterout} className="port-img" />
      <p className="writing__para">
        After a successful launch at the end of the semester, we continued working over
        the summer, implementing some key features we were missing, as well as a new design.
        We had a goal date of August 1st, 2018 to launch the next version, which was much
        more featured and smooth. Within the first week of the fall semester, we had
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
      <p className="writing__para">
        We started thinking out testing strategies and plans to refactor.
        We landed on <code>Jest</code> and <code>supertest</code> for our
        testing libraries, and then we thought about UI.
        We new we had some key problems:
      </p>
      <ol className="writing__para">
        <li>We had thousands of lines of custom CSS</li>
        <li>The site didn&apos;t perform well on mobile</li>
        <li>Most of our CSS was unstructured and unreadable</li>
      </ol>
      <p className="writing__para">
        To solve these problems, we decided on a combination of
        Bootstrap 4 and BEM CSS. We knew we needed some kind of
        library, at least temporarily. If you have ever written CSS, you know
        how frustrating and complicated it can be, and we wanted the experts to
        handle it. However, for the CSS we did write, we wanted it to be clear,
        structered, and readable. So, by the end of semester, we had accomplished
        a lot of this. The main application was re-written in Bootstrap, and
        we began refactoring our custom CSS for the landing pages with BEM.
        Unit testing is underway, but that will be a much longer process
        since we are building the tests around the API, and not vice versa.
      </p>
      <p className="writing__para">
        Spring semester was slow. We were all so busy with school that we weren't
        able to work on BarterOut all that much. We cut down our costs by reducing
        the number of backups we were doing on mLab and removing one of our GSuite
        emails. We also lost our CEO, and made some major team cutbacks. All of
        this was a lot of change but it prepared us for the summmer where we are now
        working hard on changing the direction of the platform.
      </p>
      <p className="writing__para">
        These goals mainly revolve around moving BarterOut to an organization that
        is uses open source to build products that help college students. We are
        working on adding a scheduler, social networking aspects, and much more.
      </p>
    </div>
  </div>
);

export default BarterOut;
