/**
 * @file NavBar.js
 * @description NavBar component for the site.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const NavBar = () => (
  <div className="navbar">
    <div className="navbar__left">
      <h2>Duncan Grubbs</h2>
    </div>
    <div className="navbar__right">
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
        name="writing"
        to="/writing">
        Writing
      </NavLink>
      <a
        className="navbar__link"
        name="contact"
        href="mailto:duncan.grubbs@gmail.com">
      Contact
    </a>
    </div>
  </div>
);

NavBar.propTypes = {
  page: propTypes.string,
};

export default NavBar;