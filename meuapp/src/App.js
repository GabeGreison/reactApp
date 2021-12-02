import React from "react";



const App = () => {

  const [ativo ,setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({nome: 'Gabriel' , idade:"27"})

  function handleClick(){
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Não possui faculdade'})
  }
  return (<>
  <p>NOME: {dados.nome}</p>
  <p>IDADE: {dados.idade}</p>
  <p>Faculdade: {dados.faculdade}</p>
  <button 
    onClick = {handleClick}> 
    {ativo ? 'ativo' : 'intativo'} 
  </button>
  </>
  )
};

export default App;
