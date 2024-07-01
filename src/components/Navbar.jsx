import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center bg-green-400 p-3'>
        <span className='logo text-2xl'>REDUX SHOP</span>

        <div className='items-center'>
            <Link className='navlink m-10' to='/'>Home</Link>
            <Link className='navLink m-10' to='/cart'>Cart</Link>
            <span className='cartCount font-bold m-10'>Cart Items: 0</span>
        </div>
    </div>
  )
}

export default Navbar