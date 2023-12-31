import { Route, Routes } from "react-router-dom";

import Home from "./Home";

import Blog from "./Blog";
import OCT012020 from "./blog/OCT012020";
import JAN122022 from "./blog/JAN122022";

export default (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/1" element={<OCT012020 />} />
    <Route path="/blog/2" element={<JAN122022 />} />
  </Routes>
);
