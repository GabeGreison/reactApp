import React from "react";
import "./App.css";
import Produto from "./Produto";

const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  function handleClick() {
    setAtivar(!ativar);
  }

  return (
    <div>
      <button onClick={handleClick}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
};
export default App;
