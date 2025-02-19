import Navbar from "./components/navbar/Navbar"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import LoginSignup from "./pages/LoginSignup"
import './App.css'
import Footer from "./components/footer/Footer"
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/men" element={<ShopCategory banner={men_banner} category='men'  />}/>
      <Route path="/women" element={<ShopCategory banner={women_banner} category='women' />}/>
      <Route path="/kid" element={<ShopCategory banner={kid_banner} category='kid' />}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/men/product/:productId" element={<Product/>}/>
      <Route path="/women/product/:productId" element={<Product/>}/>
      <Route path="/kid/product/:productId" element={<Product/>}/>
      <Route path="/product/:productId" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
