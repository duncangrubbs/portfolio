/**
 * @file Home.tsx
 * @description React route for homepage.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.6
 */

import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <div className="pb-4 mb-8 border-dashed border-b-2 border-indigo-600">
      <h1>Hey 👋, I&apos;m Duncan</h1>
      <p>
        I&apos;m a full-stack software engineer at{" "}
        <a className="link" href="https://predata.com/">
          Predata
        </a>{" "}
        and a founding software engineer at{" "}
        <a className="link" href="https://www.flowlie.com">
          Flowlie
        </a>
        , an early stage startup creating the next generation data
        infrastructure for angels, VCs, syndicators, and startups. I previously
        worked at{" "}
        <a className="link" href="https://www.bnymellon.com">
          BNY Mellon
        </a>{" "}
        as a production services analyst focusing on automation engineering and{" "}
        <a className="link" href="https://www.fiscalnote.com">
          FiscalNote
        </a>{" "}
        as a data science intern mostly working on NLP and machine vision
        pipelines. I love working on side projects and have experience
        with&nbsp;
        <a
          rel="noopenner external"
          className="link"
          href="https://github.com/duncangrubbs/lyrics-to-artist"
        >
          Python
        </a>
        ,&nbsp;
        <a
          rel="noopenner external"
          className="link"
          href="https://github.com/duncangrubbs/ozzy"
        >
          Typescript
        </a>
        , and{" "}
        <a
          rel="noopenner external"
          className="link"
          href="https://github.com/duncangrubbs/L-system"
        >
          Java
        </a>
        . Outside of programming I enjoy UI design, playing piano, cooking, and
        backpacking. You can find me on&nbsp;
        <a
          className="link"
          rel="noopenner external"
          href="https://github.com/duncangrubbs"
        >
          Github
        </a>
        &nbsp;and&nbsp;
        <a
          rel="noopenner external"
          className="link"
          href="https://www.linkedin.com/in/duncan-grubbs-01979a14a/"
        >
          LinkedIn
        </a>
        .
      </p>
      <br />
      <p>
        Feel free to reach out for freelance web development at{" "}
        <em>duncan.grubbs [at] gmail</em>
      </p>
    </div>
    <h1>Portfolio</h1>
    <div className="flex flex-col">
      <Link to="/portfolio/barterout" className="glass-container">
        <h2>BarterOut</h2>
        <p className="mt-2">
          BarterOut is a web application that focuses on making peer-to-peer
          used textbook transactions easier. For the last year, I have worked in
          a small team building the client-side of the site, as well as the API
          (backend) infrastructure.
        </p>
      </Link>

      <Link to="/portfolio/letsgo" className="glass-container">
        <h2>Let&apos;s Go</h2>
        <p className="mt-2">
          Recently, I returned to a project I had started a few years ago with
          the hope of rebuilding the API in a more robust, clean way, while
          still retaining the ideas I had about the app in the first place. I
          wanted to work in a test driven way, focusing on making my code clean
          and testable.
        </p>
      </Link>
    </div>
  </div>
);

export default Home;
