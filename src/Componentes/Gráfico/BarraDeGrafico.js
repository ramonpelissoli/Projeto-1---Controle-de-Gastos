import styles from "./BarraDeGrafico.module.css";

const BarraDeGrafico = (props) => {
  let alturaConteudoDaBarra = 0;

  if (props.maxValue > 0) {
    alturaConteudoDaBarra = Math.round((props.value / props.maxValue) * 100);
  }
  return (
    <div className={styles.barra_grafico}>
      <div className={styles.barra_grafico__interior}>
        <div
          className={styles.barra_grafico__conteudo}
          style={{ height: alturaConteudoDaBarra }}
        ></div>
      </div>
      <div className={styles.barra_grafico__label}>{props.label}</div>
    </div>
  );
};

export default BarraDeGrafico;
