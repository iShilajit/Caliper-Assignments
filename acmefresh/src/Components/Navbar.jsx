import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
     <nav>
        <label className='logo'>AcmeFresh</label>
        <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/ourstory'>OUR STORY</Link></li>
            <li><Link to='/hydrofarm'>HYDROPONIC FARM</Link></li>
            <li><Link to='/shop'>SHOP</Link></li>
            <li><Link to='/cart'>CART</Link></li>
          
           <li><button className='enquiry'>Enquiry</button></li>
            
        </ul>
    </nav>
    </>
  )
}

export default Navbar