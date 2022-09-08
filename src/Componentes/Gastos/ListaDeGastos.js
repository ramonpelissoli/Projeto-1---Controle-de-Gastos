import React from "react";

import GastoFeito from "./GastoFeito";
import styles from "./ListaDeGastos.module.css";

const ListaDeGastos = (props) => {
  if (props.items.length === 0) {
    return <h2 className={styles.lista_gastos__retorno}>Não há gastos nesse ano.</h2>;
  }

  return (
    <ul className={styles.lista_gastos}>
      {props.items.map((gasto) => (
        <GastoFeito
          key={gasto.id}
          nome={gasto.nome}
          valor={gasto.valor}
          data={gasto.data}
        />
      ))}
    </ul>
  );
};

export default ListaDeGastos;
