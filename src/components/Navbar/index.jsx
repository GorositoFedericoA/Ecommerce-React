import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import CartWidget from '../CartWidget'
import { CartContext } from '../../context/CartContext'

const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false)

  
  const  [cart, setCart] = useContext(CartContext)

  const quantity = cart.reduce((acc, curr) =>{
    return acc + curr.quantity
  }, 0)


  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  
  return (
    <>
      <nav className={styles.navbar}>

        <div>
              <NavLink to='/' className={styles.title} > <h2>Ecommerce React</h2> </NavLink>
        </div>

        <ul className={`${styles['navbar__menu']} ${showMenu ? styles['show'] : ""}`}>

          <li >
            <NavLink to='/items' className={styles.links}>Productos</NavLink>
          </li>

          <li>  
            <NavLink to="/category/mens-clothing" className={styles.links}>Men's clothing</NavLink>
          </li>
          
          <li>
            <NavLink to="/category/jewelery" className={styles.links} >Jewelery</NavLink>
          </li>

          <li>
            <NavLink to="/category/electronics" className={styles.links}>Electronics</NavLink>
          </li>

          <li>
            <NavLink to="/category/womens-clothing" className={styles.links}>Women's clothing</NavLink>
          </li>

          <li>
            <NavLink to="/cart" className={styles.quantity}> <CartWidget />{quantity}</NavLink>
          </li>


        </ul>

        <div className={styles['navbar__menu-toggle']} onClick={handleClick}>
          {showMenu ? <FaTimes style={{color: "#ffffff"}} /> : <FaBars style={{color: "#ffffff"}} />}
        </div>
        
      </nav>
    </>
  )
}

export default Navbar
