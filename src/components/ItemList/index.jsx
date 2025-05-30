import { Link } from 'react-router-dom'
import styles from './ItemList.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


const ItemList = ({item}) => {
  return (
    <Container fluid className='d-flex justify-content-center align-items-center flex-grap'>
          <Card className={styles.card}>
      <Card.Img variant="top" className={styles.img} src={item.thumbnail} />

      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.category}</Card.Text>
        <Card.Text>${item.price}</Card.Text>
        <Link className={styles.link} to={`${item.id}`}>
          <Button
            variant="primary">
            Comprar
          </Button>
        </Link>
      </Card.Body>
    </Card>
    </Container>

  );
}

export default ItemList