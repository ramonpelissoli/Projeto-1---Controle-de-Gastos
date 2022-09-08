import React, {useEffect, useState} from "react";

import Container from "../Interface/Container";
import DataDoGasto from "./DataDoGasto";
import styles from "./GastoFeito.module.css";

const GastoFeito = (props) => {
  const [animado, setarAnimado] = useState(false);
  
  useEffect(() => {
    if (props.items === 0 ) {
      return;
    }
    setarAnimado(true);
  }, [props.items]);

 const administraClasses = `${styles.gasto_feito} ${animado ? styles.bump : ''}`
  return (
    <li>
      <Container className={administraClasses}>
        <DataDoGasto data={props.data} />
        <div className={styles.gasto_feito__descricao}>
          <h2>{props.nome}</h2>
          <div className={styles.gasto_feito__preco}>R${props.valor}</div>
        </div>
      </Container>
    </li>
  );
};

export default GastoFeito;
