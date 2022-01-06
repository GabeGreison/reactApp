import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em Contato" />
      <img src={foto} alt="contato" />
      <div>
        <h1>Entre em contato:</h1>
        <ul className={styles.dados}>
          <li>gabriel@dev.com</li>
          <li>9.99999999</li>
          <li>Rua bem aqui , 432</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
