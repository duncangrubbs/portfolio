import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div className="h-16 mb-8 border-dashed border-b-2 border-indigo-600 max-w-2xl flex flex-row items-center justify-between">
    <NavLink to="/">
      <h2>Duncan Grubbs</h2>
    </NavLink>
    <div className="flex flex-row space-x-4">
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "navbar__link")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "navbar__link")}
        to="/blog"
      >
        Blog
      </NavLink>
    </div>
  </div>
);

export default NavBar;
