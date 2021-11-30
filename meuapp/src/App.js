import React from "react";

const App = () => {
  function handleClick(){
    console.log('você entendeu')
  }
  return <button onClick={handleClick}>clique</button>
};

export default App;
