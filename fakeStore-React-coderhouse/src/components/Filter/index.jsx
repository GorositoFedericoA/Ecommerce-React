import React from 'react'
import Card from '../ItemList'
import styles from './filter.module.css'

const Filter = ({items, category}) => {
  return (
    <div className={styles.container}>
      {items.map((item, id)=>(
        item.category == category?<Card key={id} item={item} />:null
      ))}

    </div>
  )
}

export default Filter