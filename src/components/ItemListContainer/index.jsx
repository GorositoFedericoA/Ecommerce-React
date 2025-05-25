import ItemList from "../ItemList"
import styles from './ItemListContainer.module.css'

const ItemListContainer = ({items}) => {


  return (
    <div className={styles.container}>
      {items.map((item)=>(
        <ItemList item={item} key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ItemListContainer