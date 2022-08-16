/**
 * @file index.tsx
 * @description All client-side routes for react-router.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.1.6
 */

import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";

import BarterOut from "./portfolio/BarterOut";
import LetsGo from "./portfolio/LetsGo";
import Hack4Health from "./portfolio/Hack4Health";

import Blog from "./Blog";
import OCT012020 from "./blog/OCT012020";
import JAN122022 from "./blog/JAN122022";

export default (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/portfolio/barterout" element={<BarterOut />} />
    <Route path="/portfolio/letsgo" element={<LetsGo />} />
    <Route path="/portfolio/hack4health" element={<Hack4Health />} />

    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/oct012020" element={<OCT012020 />} />
    <Route path="/blog/jan122022" element={<JAN122022 />} />
  </Routes>
);
