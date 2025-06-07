import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import Swal from 'sweetalert2';
import ItemCart from '../ItemCart';
import styles from './Cart.module.css';
import Spinner from '../Spinner';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext);
  const [isLoading, setisLoading] = useState(false);
  
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

const checkout = () => {
  const order = {
    cart: cart,
    date: new Date(),
    totalPrice: totalPrice
  };

  setisLoading(true);

    console.log("Cart", cart);
    console.log("Total price", totalPrice);

  addDoc(collection(db, 'orders'), order)
    .then(() => {
      setCart([]);
      Swal.fire({
        icon: 'success',
        title: 'Compra realizada!',
        text: 'Gracias por comprar con nosotros.',
      });
    })
    .catch((error) => {
      console.error('Error al crear la orden: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Hubo un problema',
        text: 'Intentá de nuevo más tarde.',
      });
    })
    .finally(() => {
      setisLoading(false); // ✅ bien escrito y siempre se ejecuta
    });
};

  if (cart.length === 0) {
    return (
        <h1 className={styles.title}>No hay productos en el carrito</h1>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {cart.map(item => (
          <ItemCart key={item.id} item={item}/>
          ))}

        <div className={styles.container2}>
              <p>Cantidad de productos: {quantity}</p>
              <div>Total: ${totalPrice}</div>
              {isLoading ? (<Spinner /> ):(<button className={styles.btn} onClick={checkout}>Realizar Compra</button>)}
          </div>
      </div>
    </div>
  );
  
};

export default Cart;
