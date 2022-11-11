import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Cart from './Cart'
import Checkout from './Checkout'
import Contact from './Contact'
import Home from './Home'
import Hydroponicfarm from './Hydroponicfarm'
import Ourstory from './Ourstory'
import Shop from './Shop'

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ourstory" element={<Ourstory/>} />
        <Route path="/hydrofarm" element={<Hydroponicfarm/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
       
        <Route path="/checkout" element={<Checkout/>}/>

    </Routes>
    </>
  )
}

export default AllRoutes