import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Tarikea_Main.js";
import Cargo from "./Trikea_Cargo.js";
import Contact from "./Trikea_Contact.js";
import Railways from "./Trikea_Railways.js";
import Apply from "./Trikea_Apply.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cargo" element={<Cargo />} />
        <Route path="/railways" element={<Railways />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
