import React from "react";

const App = () => {
  const [texto, setTexto] = React.useState("");

  function handleChange({ target }) {
    setTexto(target.value);
  }

  return (
    <form>
      <textarea
        name="texto"
        id="texto"
        rows="5"
        value={texto}
        onChange={handleChange}
      />
      <button>enviar</button>
    </form>
  );
};

export default App;
