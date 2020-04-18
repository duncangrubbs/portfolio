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
import Polarization from './writing/Polarization';
import Portfolio from './Portfolio';
import BarterOut from './portfolio/BarterOut';
import LetsGo from './portfolio/LetsGo';
import Hack4Health from './portfolio/Hack4Health';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/writing" component={Polarization} />

    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/portfolio/barterout" component={BarterOut} />
    <Route exact path="/portfolio/letsgo" component={LetsGo} />
    <Route exact path="/portfolio/hack4health" component={Hack4Health} />
  </Switch>
);
