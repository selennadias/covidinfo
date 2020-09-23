import React, { useState, useEffect } from "react";
import "./styles.css";

function buscaDados() {
  const url = "https://covid19-brazil-api.now.sh/api/report/v1";
  return fetch(url)
    .then(async (response) => await response.json())
    .then(async (dados) => {
      return await dados;
    })
    .catch((err) => console.error("Erro ao buscar dados", err));
}

export default function App() {
  const [casos, setCasos] = useState([]);
  useEffect(() => {
    buscaDados().then((dados) => setCasos(dados.data));
  }, []);

  return (
    <div className="container">
      <h2>Dados da API</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Estado </th>
            <th>Casos </th>
            <th>Mortes </th>
            <th>Suspeitos </th>
          </tr>
        </thead>
        <tbody>
          {casos.map(function (item, index) {
            return (
              <tr key={index}>
                <td>{item.uf}</td>
                <td>{item.cases}</td>
                <td>{item.deaths}</td>
                <td>{item.suspects}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
