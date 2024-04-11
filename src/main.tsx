import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import HotelsProvider from "./contexts/HotelsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HotelsProvider>
      <App />
    </HotelsProvider>
  </React.StrictMode>
);
