import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PokeContextProvider from "./context/pokeContext";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Fragment>
    <GlobalStyle />
    <ToastContainer />
    <PokeContextProvider>
      <App />
    </PokeContextProvider>
  </React.Fragment>
);
