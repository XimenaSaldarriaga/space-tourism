import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <li className='navbar__item'>00 HOME</li>
            <li className='navbar__item'>01 DESTINATION</li>
            <li className='navbar__item'>02 CREW</li>
            <li className='navbar__item'>03 TECHNOLOGY</li>
        </ul>
    </div>
  )
}

export default Navbar