import styles from "./Grafico.module.css";
import BarraDeGrafico from "./BarraDeGrafico";

const Grafico = (props) => {
  const valoresDeDadosGraficos = props.dadosGraficos.map(
    (dadoGrafico) => dadoGrafico.value
  );
  const maximoTotal = Math.max(...valoresDeDadosGraficos);

  return (
    <div className={styles.grafico}>
      {props.dadosGraficos.map((dadoGrafico) => (
        <BarraDeGrafico
          key={dadoGrafico.label}
          value={dadoGrafico.value}
          maxValue={maximoTotal}
          label={dadoGrafico.label}
        />
      ))}
    </div>
  );
};

export default Grafico;
