import React, { useState } from "react";

import styles from "./FormularioDeGastos.module.css";

const FormularioDeGastos = (props) => {
  const [tituloColocado, setarTituloColocado] = useState("");
  const [valorColocado, setarValorColocado] = useState("");
  const [dataColocada, setarDataColocada] = useState("");

  const MudancaDeTitulo = (event) => {
    setarTituloColocado(event.target.value);
  };
  const MudancaDeValor = (event) => {
    setarValorColocado(event.target.value);
  };
  const MudancaDeData = (event) => {
    setarDataColocada(event.target.value);
  };

  const enviadorDeFormulario = (event) => {
    event.preventDefault();

    const dadosDeGastos = {
      nome: tituloColocado,
      valor: +valorColocado,
      data: new Date(dataColocada),
    };

    props.aoSalvarDadosDeGastos(dadosDeGastos);
    setarTituloColocado('');
    setarValorColocado('');
    setarDataColocada('');
  };

  return (
    <form onSubmit={enviadorDeFormulario}>
      <div className={styles.novo_gasto__controles}>
        <div className={styles.novo_gasto__controle}>
          <label>Título</label>
          <input type="text" value={tituloColocado} onChange={MudancaDeTitulo} />
        </div>

        <div className={styles.novo_gasto__controle}>
          <label>Valor</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={valorColocado}
            onChange={MudancaDeValor}
          />
        </div>

        <div className={styles.novo_gasto__controle}>
          <label>Data</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-01-01"
            value={dataColocada}
            onChange={MudancaDeData}
          />
        </div>
      </div>
      <div className={styles.novo_gasto__acoes}>
        <button type="submit">Registrar Gasto</button>
        <button type="button" onClick={props.aoCancelar}>Cancelar</button>
      </div>
    </form>
  );
};

export default FormularioDeGastos;
