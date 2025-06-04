import { Navigate,Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import analytics from '../db/firebase-config.js'
import { collection, getDocs } from 'firebase/firestore'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext.jsx'


function App() {
  const [items, setItems] = useState([]);
  const itemsRef = collection(analytics, 'items');

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }));
    setItems(items);
    console.log(items);
  }

  useEffect(() => {
    getItems();
  }, []);


  return (
        <CartProvider>
          <Navbar />
            <Routes>

              {/* Ruta de items */}
              <Route path="/" element={ <Navigate to='/items'/> } />
              <Route path='/items' element={<ItemListContainer items={items}/>}/>
              <Route path='/items/:id' element={<ItemDetailContainer  />} />

              {/* Rutas de categorias */}
              <Route path='/category/:category' element={<ItemListContainer items={items}/>} />
              <Route path="/category/:category/:id" element={<ItemDetailContainer />} />

              {/* Ruta de carrito */}
              <Route path="/cart" element={ <Cart items={items} /> }/>
            </Routes>
      </CartProvider>
  )
}

export default App
