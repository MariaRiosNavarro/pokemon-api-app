import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppPokemonFetchProvider } from "./Context/AppPokemonFetchProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppPokemonFetchProvider>
      <App />
    </AppPokemonFetchProvider>
  </React.StrictMode>
);
