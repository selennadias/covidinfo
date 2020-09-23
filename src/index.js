import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer texto="Todos os direitos reservados IFSULDEMINAS 2020" />
  </React.StrictMode>,
  rootElement
);
