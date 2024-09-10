import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../db/firebase-config';
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

    setisLoading(true)
    addDoc(collection(db, 'orders'), order)
      .then(() => {
        setCart([]);
        Swal.fire({
          icon: 'success',
          title: 'Compra realizada!',
          text: 'Gracias por comprar con nosotros.',
        });
        setisLoaging(false);
      })
      .catch((error) => {
        console.error('Error: ', error);
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
