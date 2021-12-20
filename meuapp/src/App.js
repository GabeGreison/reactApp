import React from "react";

const App = () => {
  const [escolha, setEscolha] = React.useState("");

  return (
    <form>
      <label>
        <input
          type="radio"
          name="escolha"
          value="produto"
          onChange={({ target }) => setEscolha(target.value)}
        />
        Produto
      </label>
      <label>
        <input
          type="radio"
          name="escolha"
          value="cor"
          onChange={({ target }) => setEscolha(target.value)}
        />
        Cor
      </label>
      <p>{escolha}</p>

      <button>enviar</button>
    </form>
  );
};

export default App;
