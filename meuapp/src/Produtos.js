import React from "react";
import Titulo from "./Titulo";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <>
      <div>
        <Titulo texto = 'Produtos'/>
        {produtos.map(({ nome, propriedades }) => (
          <div key ={nome}
            style={{
              border: "1px solid black",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            {nome}
            <ul>
              {propriedades.map((prop) => (
                <li key ={prop[0]}>{prop}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Produtos;
