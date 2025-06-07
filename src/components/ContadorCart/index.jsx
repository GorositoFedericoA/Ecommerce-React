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

    return(
            <>
               <ButtonGroup>
                    <ToggleButton className={styles.agregarBtn} onClick={restarCantidad}>-</ToggleButton>
                    <ToggleButton className={styles.agregarBtn} >{cantidad}</ToggleButton>
                    <ToggleButton className={styles.agregarBtn} onClick={sumarCantidad}>+</ToggleButton>
                </ButtonGroup>

                <Button className={styles.carritoBtn} onClick={handleAgregar}>
                    AGREGAR AL CARRITO
                </Button>
            </>
    );

};

export default ContadorCart;