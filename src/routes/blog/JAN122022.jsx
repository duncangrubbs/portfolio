/**
 * @file JAN122022.jsx
 * @description Second blog post.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.5
 */

import React from 'react';
import { Link } from 'react-router-dom';

const JAN122022 = () => (
  <div>
    <div className="portfoliopage__content--article">
      <h1>A tiny date hydration middleware</h1>
      <p className="writing__para">
        I have been helping to build <a href="https://www.flowlie.com">Flowlie</a>{' '}
        since January of 2021 and it has been an incredible learning experience.
        Our entire stack is written in Typescript (React and Express) and we use
        MongoDB for our database. One issue that we were running into quite
        often is that when we were sending dates from our frontend to our API
        and vice versa they we getting serialized as strings. So for example, on
        our frontend we would initialize a date when someone updated a
        fundraising round using <code>new Date()</code> and then store it in
        some object and hand it off to the API via <code>POST</code> request.
        However, the backend would see something like this{' '}
        <code>2022-01-12T23:54:34.574Z</code>.
      </p>
      <p className="writing__para">
        The problem here is that native Javascript <code>Date</code> objects are
        serialized as strings in JSON, which is the most common format for REST
        APIs. This was frustrating because if we wanted to do any calculations
        with the date or compare it to another one we needed to initialize a new{' '}
        <code>Date</code> object. Luckily,{' '}
        <a href="https://expressjs.com/">Express.js</a>{' '}
        has a super nice middleware feature that allows you to intercept
        requests and do something to them before passing them off to the next
        handler.{' '}
        <a href="https://gist.github.com/duncangrubbs/d5133117fce31559576dbec97bf7832f">
          Here
        </a>{' '}
        is a super simple example of a middleware that solves this problem. It
        takes the request body data, looks for patterns that match a string
        serialization of a <code>Date</code>{' '}
        object and hydrates them back into <code>Date</code> objects. This of
        course is only practical if your backend is also written in TS/JS.
      </p>
      <p className="writing__para">
        This was great and all, but it was only half of the equation. What about
        sending dates to the frontend from the API, how could we handle that
        situation? After giving it some thought we decided why not create a
        wrapper that would let us apply middleware to our frontend request
        handlers. In my <Link to="/blog/oct012020">earlier</Link>{' '}
        blog post, I introduced{' '}
        <a href="https://github.com/duncangrubbs/ozzy">ozzy</a>. Since then I
        have been working on an update that supports a similar middleware API to
        Express.js. Using ozzy, we could solve the same problem on the frontend
        and the backend using essentially the same code.
      </p>
      <p className="writing__para">
        This also extends beyond this one use case. Middlewares are great for all
        kinds of problems you might be facing, and then are just as fun to use
        on the frontend as they are on the backend.
      </p>
    </div>
  </div>
);

export default JAN122022;
