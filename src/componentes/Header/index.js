import React from "react";
import "./style.css";

function Header() {
  // JSX
  return (
    <div id="cabe" className="jumbotron">
      <h1 className="display-4"> Sistema de Informação sobre Covid-19</h1>
      <p className="lead"> Lista de casos e Mortes no Brasil por estado</p>
    </div>
  );
}
export default Header;
