/**
 * @file App.jsx
 * @description Entry component.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.5
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';

import index from './routes/index';

export default function App() {
  return (
    <BrowserRouter>
      <div className="header"></div>
      <NavBar page="Home" />
      {index}
    </BrowserRouter>
  );
}
