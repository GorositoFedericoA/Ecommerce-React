import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";
import {Button} from "react-bootstrap";
import styles from "./ContadorCart.module.css";

const ContadorCart = ({ id, onAgregarAlCarrito }) => {

    const [cantidad, setCantidad] = useState(1);

    const sumarCantidad = () => setCantidad(prevCantidad => prevCantidad + 1);

    const restarCantidad = () => {
        if(cantidad > 1) setCantidad(prevCantidad => prevCantidad - 1);
    }
    
    const handleAgregar = () =>{
        onAgregarAlCarrito(cantidad);
        setCantidad(1);
    }

    return (
      <>
        <ButtonGroup className={styles.contadorBtnGroup}>
          <Button className={styles.agregarBtn} onClick={restarCantidad}>
            -
          </Button>

          <div className={styles.cantidadDisplay}>{cantidad}</div>

          <Button className={styles.agregarBtn} onClick={sumarCantidad}>
            +
          </Button>
        </ButtonGroup>

        <Button className={styles.carritoBtn} onClick={handleAgregar}>
          AGREGAR AL CARRITO
        </Button>
      </>
    );

};

export default ContadorCart;