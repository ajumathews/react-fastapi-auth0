import React from "react";
import ReactDOM from "react-dom/client";
import "./css/styles.css";
import Axios from "axios";
import Public from "./components/Public";
import Protected from "./components/Protected";

import { BrowserRouter, Routes, Route } from "react-router-dom";

Axios.defaults.baseURL = "http://localhost:8000";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/public" element={<Public />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
