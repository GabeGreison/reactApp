import React from "react";
import Head from "./Head";
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);
  if (produtos === null) return null;
  return (
    <section className={styles.produtos + " animeLeft"}>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}

      <Head title="Ranek" description="Produtos" />
    </section>
  );
};

export default Produtos;