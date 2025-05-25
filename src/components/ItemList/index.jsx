import { Link } from 'react-router-dom'
import styles from './ItemList.module.css'

const ItemList = ({item}) => {
  return (
    <Link className={styles.link} to={`${item.id}`}>
      

    <div className={styles.card}>
      <div className={styles.img}>
        <img className={styles.img} src={item.image} />
      </div>
      <div className={styles.content}>
        <h3>{item.title}</h3>
        <p className={styles.price}>${item.price}</p>
      </div>
    </div>
    </Link>

  
  )
}

export default ItemList