import React from "react";



const App = () => {
  
const [contador , setContador] = React.useState(0)
const [items, setItems] = React.useState(['número 0'])

function handleClick(){
  setContador((contador)=> {
    return contador + 1
  })

  setItems((items) => [...items, 'número ' + (contador + 1)]
  )
}

  return(
    <>
    <h1>Contador: {items.map((item) => 
    <li>{item}</li>)}</h1>
    <button onClick = {handleClick}>{contador}</button>
    </>
  )};

export default App;
