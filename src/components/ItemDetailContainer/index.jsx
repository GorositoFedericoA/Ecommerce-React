import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./itemDetailContainer.module.css";
import { doc, getDoc } from "firebase/firestore";
import analytics from "../../../db/firebase-config.js";
import { CartContext } from "../../context/CartContext.jsx";
import Spinner from "../Spinner";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import ContadorCart from "../ContadorCart/index.jsx";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);
  const productInCart = cart.find(p => p.id === id);
  const quantity = productInCart ? productInCart.quantity : 0;


  const addToCart = (cantidad) => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) 
        {
          return currItems.map((item) => {
          if (item.id === id) 
          {
            return { ...item, quantity: item.quantity + cantidad };
          } 
          else 
          {
            return item;
          }
        });
      } 
      else 
      {
        return [
          ...currItems, 
          {
            id,
            quantity: cantidad,
            price: item.price,
            title: item.title,
            thumbnail: item.thumbnail,
            category: item.category 
          }
        ];
      }
    });
  };

  
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
      {isLoading ? (
        <Spinner />
      ) : (
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col xs={12} md={6} className={styles.imageCol}>
              <img
                className={styles.img}
                src={item.thumbnail}
                alt={item.title}
              />
            </Col>
            <Col xs={12} md={6} className={styles.detailsCol}>
              <p className={styles.category}>{item.category.toUpperCase()}</p>
              <h2 className={styles.title}>{item.title}</h2>
              <p>{item.description}</p>
              <p className={styles.price}>${item.price}</p>


              <ContadorCart id={id} onAgregarAlCarrito={addToCart} />

            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ItemDetailContainer