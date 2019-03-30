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
      name="portfolio"
      to="/portfolio">
      Portfolio
    </NavLink>
    <NavLink
      exact
      className="navbar__link"
      activeClassName="selected"
      name="writing"
      to="/writing">
      Writing
    </NavLink>
  </div>
);

NavBar.propTypes = {
  page: propTypes.string,
};

export default NavBar;