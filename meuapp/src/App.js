import React from "react";



const App = () => {
  
const [contador , setContador] = React.useState(0)

function handleClick(){
  setContador((contador)=> {
    return contador + 1
  })
}

  return(
    <>
    <h1>Contador:</h1>
    <button onClick = {handleClick}>{contador}</button>
    </>
  )};

export default App;
