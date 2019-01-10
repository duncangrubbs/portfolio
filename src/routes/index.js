/**
 * @file index.js
 * @description All client-side routes for react-router.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.0
 */

import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
