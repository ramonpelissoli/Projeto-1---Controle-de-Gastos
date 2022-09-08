import React, { useState } from "react";

import Gastos from "./Componentes/Gastos/Gastos";
import NovoGasto from "./Componentes/NovoGasto/NovoGasto";

const GASTOS_INICIAIS = [
  {
    id: "e1",
    nome: "Papel Higiênico",
    valor: 13.59,
    data: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    nome: "Comida do Cachorro",
    valor: 100.99,
    data: new Date(2022, 5, 12),
  },
  {
    id: "e3",
    nome: "Seguro do Carro",
    valor: 250.67,
    data: new Date(2022, 4, 3),
  },
  {
    id: "e4",
    nome: "Mesa para PC",
    valor: 450.99,
    data: new Date(2022, 2, 20),
  },
];

const Aplicativo = () => {
  const [gastos, setarGastos] = useState(GASTOS_INICIAIS);

  const adicionadorDeGastos = (gasto) => {
    setarGastos((GastosAnteriores) => {
      return [gasto, ...GastosAnteriores];
    });
  };
  return (
    <div>
      <NovoGasto aoAdicionarGastos={adicionadorDeGastos} />
      <Gastos items={gastos} />
    </div>
  );
};

export default Aplicativo;
