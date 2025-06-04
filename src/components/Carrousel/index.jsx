import Carousel from 'react-bootstrap/Carousel';
import styles from './Carrousel.module.css';
import ImageMuebles from "../../assets/carrousel-muebles.png";
import ImageFragancias from "../../assets/carrousel-fragancias.png";
import ImageCosmeticos from "../../assets/carrousel-cosmeticos.png";
import ImageAlimentos from "../../assets/carrousel-alimentos.png";

const Carrousel = () => {
  return (
    <Carousel fade className="m-3">
      <Carousel.Item className={styles.carouselItem}>
        <img className="d-block w-100" src={ImageMuebles}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ImageAlimentos} />
      </Carousel.Item>
            <Carousel.Item>
        <img src={ImageCosmeticos} />
      </Carousel.Item>
            <Carousel.Item>
        <img src={ImageFragancias} />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;