import { Link } from 'react-router-dom'
import styles from './ItemList.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemList = ({item}) => {
  return (
    <Card style={{ width: "18rem" }} className={styles.card}>
      <Link className={styles.link} to={`${item.id}`}>
        <Card.Img variant="top" className={styles.img} src={item.image} />
      </Link>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>${item.price}</Card.Text>
        <Button variant="primary" onClick={() => window.location.href = `${item.id}`}>Go somewhere</Button>
      </Card.Body>
    </Card>


  );
}

export default ItemList