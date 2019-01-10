/**
 * @file NavBar.js
 * @description NavBar component for the site.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <div className="navbar__left">
      <h1>Duncan Grubbs</h1>
    </div>
    <div className="navbar__right">
      <Link className="navbar__link" to="/">Home</Link>
      <Link className="navbar__link" to="/">Writing</Link>
      <Link className="navbar__link" to="/">Contact</Link>
    </div>
  </div>
);

export default NavBar;