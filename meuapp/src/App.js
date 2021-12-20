import React from "react";

const App = () => {
  const [select, setSelect] = React.useState("");

  function handleChange({ target }) {
    setSelect(target.value);
  }

  return (
    <form>
      <select name="" id="bairros" value={select} onChange={handleChange}>
        <option value="" disabled>
          Selecione
        </option>
        <option value="vila peri"> Vila Peri</option>
        <option value="bonsucesso"> Bonsucesso</option>
        <option value="benfica"> Benfica</option>
        <option value="araxa">Parque araxa</option>
        <option value="maraponga">Maraponga</option>
      </select>

      <p>{select}</p>
      <button>enviar</button>
    </form>
  );
};

export default App;
