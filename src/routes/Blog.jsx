/**
 * @file Blog.js
 * @description React route for blog.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.3
 */

import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import WorkCard from '../components/WorkCard';

const Blog = () => (
  <div>
    <div className="header"></div>
    <NavBar page="Portfolio" />
    <div className="blog__content">
       <Link to="/blog/oct012020">
        <WorkCard
          title="Modularize your API interface in Javascript"
          text=""
        />
      </Link>
    </div>
  </div>
);

export default Blog;
