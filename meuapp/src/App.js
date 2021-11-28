import React from "react";


const App = () => {

  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  const precos = produtos.filter(({preco}) => Number(preco.replace('R$ ', '')) > 1500 )

  return (<section>
    {precos.map(({nome , preco , id , cores}) => <div key={id}>
      <h1> {nome}</h1>

      <p> {preco}</p>

      <div style = {{backgroundColor : cores[0], 
        color: "whitesmoke"}}>{cores[0]}</div>

      <div style = {{backgroundColor : cores[1], 
        color: "whitesmoke"}}>{cores[1]}</div>

      <div style = {{backgroundColor : cores[2], 
        color: "whitesmoke"}}>{cores[2]}</div>
    </div>)}
  </section>);
};



export default App;