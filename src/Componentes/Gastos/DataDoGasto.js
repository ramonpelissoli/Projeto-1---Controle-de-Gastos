import React from "react";

import styles from "./DataDoGasto.module.css";

const DataDoGasto = (props) => {
  const mes = props.data.toLocaleString("pt-BR", { month: "long" });
  const dia = props.data.toLocaleString("pt-BR", { day: "2-digit" });
  const ano = props.data.getFullYear();

  return (
    <div className={styles.data_gasto}>
      <div className={styles.data_gasto__ano}>{ano}</div>
      <div className={styles.data_gasto__mes}>{mes}</div>
      <div className={styles.data_gasto__dia}>{dia}</div>
    </div>
  );
};

export default DataDoGasto;
