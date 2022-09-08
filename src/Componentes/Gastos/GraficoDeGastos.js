import Grafico from "../Gráfico/Grafico";

const GraficoDeGastos = (props) => {
  const dadosNoGrafico = [
    { label: "Jan", value: 0 },
    { label: "Fev", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Abr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Ago", value: 0 },
    { label: "Set", value: 0 },
    { label: "Out", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dez", value: 0 },
  ];

  for (const gasto of props.gastos) {
    const mesDoGasto = gasto.data.getMonth();
    dadosNoGrafico[mesDoGasto].value += gasto.valor;
  }
  return <Grafico dadosGraficos={dadosNoGrafico} />;
};

export default GraficoDeGastos;
