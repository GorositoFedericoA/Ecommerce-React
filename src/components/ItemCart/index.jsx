import styles from './ItemCart.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCart = ({item}) => {
    const [cart, setCart] = useContext(CartContext);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
      };



  return (
    <div className={styles.card}>
        <div>
            <img className={styles.img} src={item.image} alt="" />
        </div>
        <div className={styles.content}>
            <p className={styles.price}>{item.category}</p>
            <p>Cant: {item.quantity}</p>
            <p>Precio ${item.price}</p>
            <p>Subtotal: ${item.quantity * item.price}</p>
            <button className={styles.btn} onClick={() => removeFromCart(item.id)}>Eliminar producto</button>
        </div>
    </div>
  )
}

export default ItemCart