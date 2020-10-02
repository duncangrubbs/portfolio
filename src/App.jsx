/**
 * @file App.js.
 * @description Entry component.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.3
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import index from './routes/index';

export default function App() {
  return (
    <Router>
      { index }
    </Router>
  );
}