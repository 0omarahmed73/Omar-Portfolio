import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { NavbarProvider } from "./context/NavbarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavbarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavbarProvider>
  </React.StrictMode>
);
