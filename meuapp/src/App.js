import React from "react";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import { Select } from "./Form/Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [fruta, setFruta] = React.useState("");
  return (
    <form>
      <Radio options={["laranja", "uva"]} value={fruta} setValue={setFruta} />
      <Select
        options={["Smartphone", "Notebook", "Desktop"]}
        value={produto}
        setValue={setProduto}
        required
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
      <Select
        options={["verde", "azul", "vermelho"]}
        value={cor}
        setValue={setCor}
      />
    </form>
  );
};

export default App;
