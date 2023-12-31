import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScrollTracker from "./components/ScrollTracker";

import index from "./routes/index";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTracker />
      <div className="header"></div>
      <main className="container max-w-2xl px-4 mx-auto">
        <NavBar />
        {index}
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
