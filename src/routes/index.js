/**
 * @file index.js
 * @description All client-side routes for react-router.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.5
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';

import BarterOut from './portfolio/BarterOut';
import LetsGo from './portfolio/LetsGo';
import Hack4Health from './portfolio/Hack4Health';

import Blog from './Blog';
import OCT012020 from './blog/OCT012020';

export default (
  <Routes>
    <Route exact path="/" element={<Home />} />

    <Route exact path="/portfolio/barterout" element={<BarterOut />} />
    <Route exact path="/portfolio/letsgo" element={<LetsGo />} />
    <Route exact path="/portfolio/hack4health" element={<Hack4Health />} />

    <Route exact path="/blog" element={<Blog />} />
    <Route exact path="/blog/oct012020" element={<OCT012020 />} />
  </Routes>
);
