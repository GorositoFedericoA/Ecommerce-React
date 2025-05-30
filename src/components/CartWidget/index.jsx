import logo from '../../assets/compras.png' // Importa el logo del carrito
import styles from '../CartWidget/CartWidget.module.css' // Importa los estilos del carrito

const CartWidget = () => {
  return (
    <>
      <img src={logo} alt="" className={styles.logo} />
    </>
  )
}

export default CartWidget