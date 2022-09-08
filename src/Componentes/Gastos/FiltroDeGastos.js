import React from "react";

import styles from "./FiltroDeGastos.module.css";

const FiltroDeGastos = (props) => {
  const selecionadorDeFiltro = (event) => {
    props.aoFiltrarAno(event.target.value);
  };
  return (
    <div className={styles.filtro_gastos}>
      <div className={styles.filtro_gastos__controle}>
        <label>Filtrar por ano:</label>
        <select value={props.selecionado} onChange={selecionadorDeFiltro}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default FiltroDeGastos;
