import React from "react";
import { Link } from "react-router-dom";
import BlogPostCard from "../components/BlogPostCard";

const Home = () => (
  <div>
    <div className="pb-4 mb-8 border-dashed border-b-2 border-indigo-600">
      <h1>Hey 👋, I&apos;m Duncan</h1>
      <p>
        I&apos;m a software engineer at{" "}
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
    <h1>Latest Post</h1>
    <div className="flex flex-col">
      <BlogPostCard
        text="I have helping to build Flowlie since January of 2021 and it has been
          an incredible learning experience. Our entire stack is written in
          Typescript (React and Express) and we use MongoDB for our database.
          One issue that we were running into quite often is that when we were
          sending dates from our frontend to our API or vice versa they we
          getting serialized as strings. So for example, on our frontend we
          would initialize ..."
        title="A tiny date hydration middleware"
        link="/blog/2"
      />
    </div>
  </div>
);

export default Home;
