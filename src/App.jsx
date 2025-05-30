import { Navigate,Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import db from '../db/firebase-config.js'
import { collection, getDocs } from 'firebase/firestore'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext.jsx'


function App() {
  const [items, setItems] = useState([]);
  const itemsRef = collection(db, 'items');

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
              <Route path="/" element={ <Navigate to='/items'/> } />
              <Route path='/items' element={<ItemListContainer items={items}/>}/>
              <Route path='/category/mens-clothing' element={<Filter items={items} category="men's clothing"/>} />
              <Route path="/category/mens-clothing/:id" element={<ItemDetailContainer  />} />
              <Route path='/category/jewelery' element={<Filter items={items} category="jewelery"/>} />
              <Route path="/category/jewelery/:id" element={<ItemDetailContainer />} />
              <Route path='/category/electronics' element={<Filter items={items} category="electronics"/>} />
              <Route path="/category/electronics/:id" element={<ItemDetailContainer />} />
              <Route path='/category/womens-clothing' element={<Filter items={items} category="women's clothing"/>} />
              <Route path="/category/womens-clothing/:id" element={<ItemDetailContainer />} />
              <Route path='/items/:id' element={<ItemDetailContainer  />} />
              <Route path="/cart" element={ <Cart items={items} /> }/>
            </Routes>
      </CartProvider>
  )
}

export default App
