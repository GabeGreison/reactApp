import React from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [fruta, setFruta] = React.useState("");
  const [linguagem, setLinguagem] = React.useState([]);

  return (
    <form>
      <h2>Frutas</h2>
      <Radio options={["laranja", "uva"]} value={fruta} setValue={setFruta} />
      <h2>Selecione um produto</h2>
      <Select
        options={["Smartphone", "Notebook", "Desktop"]}
        value={produto}
        setValue={setProduto}
        required
      />
      <h2>Preencha os campos abaixo</h2>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <h2>Escolha uma cor</h2>
      <Select
        options={["verde", "azul", "vermelho"]}
        value={cor}
        setValue={setCor}
      />
      <h2>Selecione uma linguagem</h2>
      <Checkbox
        options={["Javascript", "C", "PHP"]}
        value={linguagem}
        setValue={setLinguagem}
      />

      <button>Enviar</button>
    </form>
  );
};

export default App;
