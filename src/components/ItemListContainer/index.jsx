import ItemList from "../ItemList"
import styles from './ItemListContainer.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carrousel from '../Carrousel';
import { useParams } from "react-router-dom";


const ItemListContainer = ({items}) => {  

  // obtengo el parametro de la url
  const {category} = useParams();

  const itemsFiltrados = category 
  ? items.filter(item => item.category === category) 
  : items;

  

  return ( 
    <Container className={styles.container}>
      <Carrousel />
      <Row className="g-4 align-items-center justify-content-center">
      {
      itemsFiltrados.map((item)=>(
      <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
        <ItemList item={item} key={item.id} {...item} />
      </Col>
      ))
      }
      </Row>
    </Container>
  );
};
export default ItemListContainer