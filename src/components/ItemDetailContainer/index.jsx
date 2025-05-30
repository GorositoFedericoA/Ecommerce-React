import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./itemDetailContainer.module.css";
import { doc, getDoc } from "firebase/firestore";
import analytics from "../../../db/firebase-config.js";
import { CartContext } from "../../context/CartContext.jsx";
import Spinner from "../Spinner";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price: item.price, title: item.title, image: item.image, category: item.category }];
      }
    });
  };

  const removeItem = () => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantitybyId = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantitybyId(id);

  const getItem = async () => {
    const itemDoc = doc(analytics, "items", id);
    const item = await getDoc(itemDoc);
    if (item.exists()) {
      setItem(item.data());
      setisLoading(false);
    } else {
      console.log("No existe el documento!");
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
    {isLoading ? (<Spinner />) : (
    <div className={styles.card}>
      <div className={styles.img}>
        <img className={styles.img} src={item.image} />
      </div>

      <div className={styles.content}>
        <h3>{item.title}</h3>
        <p>{item.category}</p>
        <p>{item.description}</p>
        <p>$ {item.price}</p>
        <div className={styles.btnContainer}>
          {quantityPerItem > 0 ? (
            <button onClick={() => addToCart()}>+</button>
            ) : (
              <button onClick={() => addToCart()}>Agregar el carrito</button>
              )}
          <div>{quantityPerItem > 0 && <div>{quantityPerItem}</div>}</div>
          {quantityPerItem > 0 && (
            <button onClick={() => removeItem(item.id)}>-</button>
            )}
          </div>
      </div>
    </div>
    )}
    </>
  );
};

export default ItemDetailContainer;
