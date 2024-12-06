import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Routes.jsx";
import "./styles/Global.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
