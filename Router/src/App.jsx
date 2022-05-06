import { Route, Routes } from 'react-router-dom'
import { AboutUs } from './components/About Us'
import { Cart } from './components/Cart'
import { ContactUs } from './components/ContactUs'

import { FAQ } from './components/FAQ'

import { HomePage } from './components/HomePage'
import { Login } from './components/Login'
import { MensProduct } from './components/MensProduct'
import { Navbar } from './components/Navbar'
import { WomensProduct } from './components/WomensProduct'

function App() {

  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/mens" element={<MensProduct/>}></Route>
        <Route path="/womens" element={<WomensProduct/>}></Route>
      </Routes>
    
    </div>
  )
}

export default App
