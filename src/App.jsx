/**
 * @file App.jsx
 * @description Entry component.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.5
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import ScrollTracker from './components/ScrollTracker';

import index from './routes/index';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTracker />
      <div className="header"></div>
      <NavBar page="Home" />
      {index}
    </BrowserRouter>
  );
}
