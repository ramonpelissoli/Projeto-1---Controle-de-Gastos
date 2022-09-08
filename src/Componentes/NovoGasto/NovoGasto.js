import React, { useState } from "react";
import FormularioDeGastos from "./FormularioDeGastos";

import styles from "./NovoGasto.module.css";

const NovoGasto = (props) => {
  const [estaAberto, setarEstaAberto] = useState(false);
  const SalvadorDeDadosDeGastos = (dadosDeGastosColocados) => {
    const dadosDeGastos = {
      ...dadosDeGastosColocados,
      id: Math.random().toString(),
    };
    props.aoAdicionarGastos(dadosDeGastos);
    setarEstaAberto(false);
  };

  const abridorDeFormulario = () => {
    setarEstaAberto(true);
  };

  const fechadorDeFormulario = () => {
    setarEstaAberto(false);
  };
  return (
    <div className={styles.novo_gasto}>
      <div>
        {!estaAberto && (
          <button onClick={abridorDeFormulario}>Adicionar Novo Gasto</button>
        )}
        {estaAberto && (
          <FormularioDeGastos
            aoSalvarDadosDeGastos={SalvadorDeDadosDeGastos}
            aoCancelar={fechadorDeFormulario}
          />
        )}
      </div>
    </div>
  );
};

export default NovoGasto;
