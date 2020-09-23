import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer texto="Todos os direitos reservados" />
  </React.StrictMode>,
  rootElement
);
