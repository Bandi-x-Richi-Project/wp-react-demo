import React from "react";
import ReactDOM from "react-dom/client";
import Tailwind from "primereact/passthrough/tailwind";
import "./global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider value={{ unstyled: false, pt: Tailwind }}>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
