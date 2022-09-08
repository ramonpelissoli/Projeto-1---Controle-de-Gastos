import React, { useState } from "react";
import Container from "../Interface/Container";
import FiltroDeGastos from "./FiltroDeGastos";

import styles from "./Gastos.module.css";
import GraficoDeGastos from "./GraficoDeGastos";
import ListaDeGastos from "./ListaDeGastos";

const Gastos = (props) => {
  const [anoFiltrado, setarAnoFiltrado] = useState("2022");

  const filtradorDeAno = (anoSelecionado) => {
    setarAnoFiltrado(anoSelecionado);
  };

  const gastosFiltrados = props.items.filter((gasto) => {
    return gasto.data.getFullYear().toString() === anoFiltrado;
  });

  return (
    <div>
      <Container className={styles.gastos}>
        <FiltroDeGastos
          selecionado={anoFiltrado}
          aoFiltrarAno={filtradorDeAno}
        />
        <GraficoDeGastos gastos={gastosFiltrados}/>
        <ListaDeGastos items={gastosFiltrados}/>
      </Container>
    </div>
  );
};

export default Gastos;
