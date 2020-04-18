/**
 * @file LetsGo.js
 * @description React route for Let's Go.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';

import NavBar from '../../components/NavBar';

import letsgo from '../../res/images/letsgo.jpg';
import letsgopromo from '../../res/images/letsgopromo.png';

const Hack4Health = () => (
  <div>
    <div className="header"></div>
    <NavBar page="Portfolio" />
    <div className="portfoliopage__content--barterout">
      <h1><a id="barterout__heading" href="https://www.letsgoapp.social">Let's Go</a></h1>
      <p className="writing__para">
        Recently, I returned to a project I had started a few years
        ago with the hope of rebuilding the API in a more robust,
        clean way, while still retaining the ideas I had about
        the app in the first place. I wanted to work in a test driven
        way, focusing on making my code clean and testable. I learned
        so much building this API, with resources like&nbsp;
        <a href="https://blog.bitsrc.io/build-a-unit-testing-suite-with-mocha-and-mongoose-eba06c3b3625?gi=b52955afa66d">
          this medium article
        </a>
        &nbsp;and&nbsp;
        <a href="https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters">
          this article about testing
        </a>
        &nbsp;being very helpful.
      </p>

      <p className="writing__para">
        I wrote the API in Node using Express and MongoDB. I was already
        familiar with these two tools from work on <a href="/portfolio/barterout">BarterOut</a> and I
        felt like I would be able to make the fastest progress with them. That being said
        I learned a lot more about how to use them well. For example,
        using authentication middleware with Express, decoupling
        the MongoDB connection script, and using .env to hide environment
        variables were all huge learning experiences.
      </p>

      <p className="writing__para">
        I am using Mocha as my test
        runner and Chai to help test API endpoints. Currently, I have all of the
        basic functionality of the API done. Users can sign up, and then login.
        They can post activites, request others, approve/deny requests,
        see nearby events, and edit/delete their own events. After building
        this functionality, and making sure all my code was tested, I wanted
        to move on to creating promo material, the mobile app, and build/deploy structure.
      </p>

      <p className="writing__para">
        I registered a domain name, and started building a promo website
        and designs for the mobile app. I also setup hosting and CI/CD.
        I am using Travis CI and Heroku for CI/CD. When I push to Github, the
        code is tested on Travis CI, if everything passes, then it is deployed
        to Heroku. The promo website is currently being deployed manually
        through pushing to the Heroku remote.
      </p>

      <img alt="promo site" src={letsgopromo} className="port-img" />

      <p className="writing__para">
        My next steps are designing and building the mobile app.
        I am currently designing in Adobe XD and learning IOS development.
        I hope to launch a beta version of the mobile app by September
        of this year. So far this process has been an incredible learning
        experience, especially since I am trying to build everything
        in the most professional way I can. 
      </p>
      <img alt="barterout" src={letsgo} className="letsgo-img" />
    </div>
  </div>
);

export default Hack4Health;
