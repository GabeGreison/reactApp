import React from "react";
import Input from "./Form/Input";
import { Select } from "./Form/Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  return (
    <form>
      <Select
        options={["Smartphone", "Notebook", "Desktop"]}
        value={produto}
        setValue={setProduto}
        required
        nome="produtos"
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
      <Select
        options={["verde", "azul", "vermelho"]}
        value={produto}
        setValue={setProduto}
        nome="cor"
      />
    </form>
  );
};

export default App;
