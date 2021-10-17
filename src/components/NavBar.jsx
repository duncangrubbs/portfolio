/**
 * @file NavBar.js
 * @description NavBar component for the site.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.3
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const NavBar = () => (
  <div className="navbar">
    <div className="navbar__content">
      <NavLink to="/" className="navbar__content--left">
        <h2>Duncan Grubbs</h2>
      </NavLink>
      <div className="navbar__content--right">
        <NavLink
          exact
          className="navbar__link"
          activeClassName="selected"
          name="home"
          to="/">
          Home
        </NavLink>
        <NavLink
          exact
          className="navbar__link"
          activeClassName="selected"
          name="blog"
          to="/blog">
          Blog
        </NavLink>
      </div>
    </div>
  </div>
);

NavBar.propTypes = {
  page: propTypes.string,
};

export default NavBar;