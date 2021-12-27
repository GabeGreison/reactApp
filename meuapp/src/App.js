import React from "react";
import useForm from "./Hooks/useForm";
import Input from "./Form/Input";

const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate()) {
      console.log("Enviou");
    } else {
      console.log("Não enviou");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        type="text"
        id="cep"
        placeholder="000000-000"
        {...cep}
      />
      <Input
        label="Email"
        type="text"
        id="email"
        placeholder="gabriel@gmail.com"
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
