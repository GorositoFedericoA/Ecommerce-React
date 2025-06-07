import styles from './ItemCart.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'


const ItemCart = ({item}) => {


    const [cart, setCart] = useContext(CartContext);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
      };



  return (
    
    <Card className={styles.card}>
        <Card.Img src={item.thumbnail} />
        <Card.Body className={styles.cardBody}>
            <Card.Text className={styles.categoria}>{item.category}</Card.Text>
            <Card.Title className={styles.cardTitle}>{item.title}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            <Card.Text>Cant: {item.quantity}</Card.Text>
            <Card.Text>Subtotal: ${item.quantity * item.price}</Card.Text>
            <Button className={styles.btn} onClick={() => removeFromCart(item.id)}>Eliminar producto</Button>
        </Card.Body>
    </Card>
  );
};

export default ItemCart