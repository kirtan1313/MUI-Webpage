import './App.css'
import Header from './Componets/Header/Header'
import NavbarHeader from './Componets/Navbar/NavbarHeader';
import Cart from './Componets/Cart/Cart';
import { Route, Routes } from 'react-router';
import HomeWraper from './Componets/HomeWraper/HomeWraper';
import { useEffect, useState } from 'react';
import Data from '../data';
import Wishlist from './Componets/Wishlist/Wishlist';

function App() {

  const [productsId, setProductsId] = useState('');
  const [cartProducts, setCartProducts] = useState([]);
  
  const [wislistId,setWislistId]=useState('')
  const [wislistProduct, setwislistProduct] = useState([])



  useEffect(() => {

    const productCartFilter = Data.filter((product) => {
      return product.id === productsId
    })

    setCartProducts([...cartProducts, ...productCartFilter])

  }, [productsId])

  useEffect(() => {
    if (wislistId) {
      const productWishlistFilter = Data.filter((product) => product.id === wislistId);
      setwislistProduct((prev) => [...prev, ...productWishlistFilter]);
    }
  }, [wislistId]);




  return (
    <>
      <Header cartProducts={cartProducts} wislistProduct={wislistProduct}/>
      <NavbarHeader />

      <Routes>
        <Route path="/" element={<HomeWraper setProductsId={setProductsId} setWislistId={setWislistId}/>} />
        <Route path="/cart" element={<Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
        <Route path="/whisiblit" element={<Wishlist wislistProduct={wislistProduct} setwislistProduct={setwislistProduct} />} />
      </Routes>
    </>
  )
}

export default App
