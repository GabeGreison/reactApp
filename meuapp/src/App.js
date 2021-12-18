import React from "react";

const App = () => {
  const [nome, setNome] = React.useState("");
  function handleChange(event) {
    setNome(event.target.value);
  }

  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" value={nome} onChange={handleChange} id="nome" />
    </form>
  );
};

export default App;
