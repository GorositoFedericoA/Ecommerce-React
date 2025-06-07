import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemList = ({ item }) => {
  const { id, thumbnail, category, title, price } = item;

  return (
    <Link className={styles.link} to={`/items/${id}`}>
      <Card className={styles.card}>
        <Card.Img variant="top" className={styles.img} src={thumbnail} />
        <Card.Body className={styles.cardBody}>
          <Card.Text className={styles.categoria}>{category}</Card.Text>
          <Card.Title className={styles.cardTitle}>{title}</Card.Title>
          <Card.Text>${price}</Card.Text>
          {/* <Button variant="dark">Comprar</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ItemList;
