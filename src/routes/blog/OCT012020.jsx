/**
 * @file OCT012020.js
 * @description First blog post in October 2020.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.3
 */

import React from 'react';

import NavBar from '../../components/NavBar';
import ScrollTracker from '../../components/ScrollTracker';

const OCT012020 = () => (
  <div>
    <div className="header"></div>
    <ScrollTracker />
    <NavBar page="blog" />
    <div className="portfoliopage__content--article">
      <h1>Modularize your API interface in Javascript</h1>
      <p className="writing__para">
        Before I begin, I would like to put a bit of a disclaimer that this is aimed at the
        novice web developer. Many of the ideas I discuss are already widely used, and are
        not my original idea. That being said, these are specific techniques that I was able
        to actually use and improve my development process with.
      </p>
      <p className="writing__para">
        After building a lot frontends in React, I got sick of re-writing the same code for data fetching.
        I would have so many components making API calls, and in each one I would have a <code>fetch</code>
        statement in which I would have to set headers and options, do JSON parsing, and error handling.
        Avoiding duplicate code is a common programming best pratice, but it is too often ignored in the
        web development space. Javascript has come a long way even in the last few years, and there are now
        so many ways to modularize.
      </p>
      <p className="writing__para">
        With this is mind, I went googling around to see what was out there, and there were some good solutions.
        The key in most of them was true abstraction. There are some things you only want to do once.
      </p>
      <ol className="writing__para">
        <li>Declaring Headers</li>
        <li>Error Handling &amp; Parsing</li>
        <li>JSON parsing</li>
      </ol>
      <p className="writing__para">
        The solution I found is to create a few new classes. This solution is not dependent on React, as
        these will be plain vanilla Javascript files. One will act as a <code>FetchService</code>. This
        can be thought of the orchestrator, all requests will pass through this. The second class would be an
        <code>ErrorService</code>. This will be used by the FetchService to handle errors if they arise.
        The third class would be an <code>AuthService</code>. This would handle auth specific tasks such
        as logging a user in, verifying they are logged in, and updating locally stored auth tokens.
        Finally, you may want a file to store some widely used constants, like the base API url, the
        version of the API you are using, an API key if applicable.
      </p>
      
      <p className="writing__para">
        In your <code>FetchService</code> you can declare your
        <code>fetch</code> function that will override the default fetch API, this way you only have to declare your
        headers once, to standardize all of the requests you are making. Of course if you need the option of changing them,
        you can offer an optional method parameter to set them. Then, you can either declare a specific
        function for each API endpoint you will be hitting, or just declare functions for <code>GET</code>,
        <code>POST</code>, <code>PUT</code>, and <code>DELETE</code> functions. These can simply take a
        <code>url</code> and return parsed JSON, taking the work out of the component. This also helps
        if your API structure changes.
      </p>
      <p className="writing__para">
        In <code>AuthService</code>, you could declare public functions for logging a user in and out. These would
        utilize the other services to make API requests, but they would validate and store the tokens themselves.
        You could also provide functions for retrieving the auth token from storage and parsing it to return a
        permission level, etc.
      </p>
      <p className="writing__para">
        In the <code>FetchService</code>, your overridden <code>fetch</code> method
        should check the response code if it is bad, hand the response over to the <code>ErrorService</code>.
        From here, you can parse the error according to the REST API's format and even return an <code>html</code>
        component that nicely displays the error. In the component that made the original request, it would be
        as simple as adding a <code>catch</code> statement that renders the object that is returned in the
        place of your choice.
      </p>
      <p className="writing__para">
        One example of this idea in practice happened while I was working on BarterOut. I created a setup
        similar to the one I described above, with the hope of saving some time in the future, and it paid off.
        In the <code>GET</code>, etc. methods I created an optional parameter to send the <code>Authorization</code>
        header. There were some requests we made before users were logged in, and other made while they were logged
        in, and I wanted a way for the components to make the choice. Of course some endpoints required the header
        always, but for some it was optional. At some point, we changed the format of the <code>Authorization</code>
        header our API accepted from <code>Token user_token</code> to <code>Bearer user_token</code>. Because we
        were using a <code>FetchService</code>, this was a one line fix on the frontend.
      </p>
    </div>
  </div>
);

export default OCT012020;
