import React from 'react'

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  
  const corAtivo = {
    color:'green'
  }
  const corInativo ={
    color:'red'
  }

  const dados = luana;

  let total =0;
  let valor =0;

  dados.compras.forEach((compra) => {
  valor = compra.preco.substring(3, compra.preco.length);
  total += Number(valor)
});


  return (<div>
    <p>Nome: {dados.cliente}</p>
    <p>Idade {dados.idade}</p>
    <span>Situação: </span>
    <span style = {dados.ativa ? corAtivo : corInativo} > {dados.ativa ? 'Ativa'  : 'Inativa'}</span>
    <p>Total gasto: R$ {total}</p>
    {total > 10000 ? <p> Você está gastando demais!!</p> : ''}
  </div>);

};

export default App;