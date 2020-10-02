/**
 * @file index.js
 * @description All client-side routes for react-router.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.3
 */

import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';

import Portfolio from './Portfolio';
import BarterOut from './portfolio/BarterOut';
import LetsGo from './portfolio/LetsGo';
import Hack4Health from './portfolio/Hack4Health';

import Blog from './Blog';
import OCT012020 from './blog/OCT012020';

export default (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/portfolio/barterout" component={BarterOut} />
    <Route exact path="/portfolio/letsgo" component={LetsGo} />
    <Route exact path="/portfolio/hack4health" component={Hack4Health} />

    <Route exact path="/blog" component={Blog} />
    <Route exact path="/blog/oct012020" component={OCT012020} />
  </Switch>
);
