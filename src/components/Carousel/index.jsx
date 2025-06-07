import { Carousel } from 'react-bootstrap';
import styles from './Carousel.module.css';
import { useNavigate } from 'react-router-dom';

import ImageMuebles from "../../assets/carousel-muebles.png";
import ImageFragancias from "../../assets/carousel-fragancias.png";
import ImageCosmeticos from "../../assets/carousel-cosmeticos.png";
import ImageAlimentos from "../../assets/carousel-alimentos.png";

const CarouselComponent = () => {
  const navigate = useNavigate();

  const slides = [
    { categoria: 'muebles', img: ImageMuebles, titulo: 'Muebles' },
    { categoria: 'alimentos', img: ImageAlimentos, titulo: 'Alimentos' },
    { categoria: 'belleza', img: ImageCosmeticos, titulo: 'Cosméticos' },
    { categoria: 'fragancias', img: ImageFragancias, titulo: 'Fragancias' }
  ];

  return (
    <Carousel fade className={styles.carousel}>
      {slides.map((slide, i) => (
        <Carousel.Item
          key={i}
          className={styles.carouselItem}
          onClick={() => navigate(`/category/${slide.categoria}`)}
        >
          <img className="d-block w-100" src={slide.img} alt={slide.titulo} />
          <div className={styles.overlay}>
            {slide.titulo}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
