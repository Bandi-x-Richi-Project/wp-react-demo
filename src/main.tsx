import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "../i18n";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <QueryClientProvider client={queryClient}>
        <PrimeReactProvider value={{ unstyled: false }}>
          <App />
        </PrimeReactProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
