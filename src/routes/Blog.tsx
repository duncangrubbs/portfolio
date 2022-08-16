/**
 * @file Blog.tsx
 * @description React route for blog.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.6
 */

import React from "react";
import { Link } from "react-router-dom";

const Blog = () => (
  <div>
    <Link to="/blog/jan122022">
      <div className="glass-container glass-container__blog">
        <h2>A tiny date hydration middleware</h2>
        <p className="mt-2">
          I have helping to build Flowlie since January of 2021 and it has been
          an incredible learning experience. Our entire stack is written in
          Typescript (React and Express) and we use MongoDB for our database.
          One issue that we were running into quite often is that when we were
          sending dates from our frontend to our API or vice versa they we
          getting serialized as strings. So for example, on our frontend we
          would initialize ...
        </p>
      </div>
    </Link>
    <Link to="/blog/oct012020">
      <div className="glass-container glass-container__blog">
        <h2>Modularize your API interface in Javascript</h2>
        <p className="mt-2">
          After building a lot frontends in React, I got sick of re-writing the
          same code for data fetching. I would have so many components making
          API calls, and in each one I would have a fetch statement in which I
          would have to set headers, options, do JSON parsing, and error
          handling. Avoiding duplicate code is a common programming best
          pratice, but it is too often ignored in the web development space.
          Javascript has come a long way even in the last few years, and there
          are now so many ways to modularize ...
        </p>
      </div>
    </Link>
  </div>
);

export default Blog;
