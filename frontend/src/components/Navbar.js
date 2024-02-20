import React, { useState } from 'react'
import './navStyle.css';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            //icon:<HomeIcon/>
        },
        {
            text:"About",
            //icon:<HomeIcon/>
        },
        {
            text:"Contacts",
            //icon:<HomeIcon/>
        }
    ]

  return (<nav>
    <div className='nav-logo-container'>

    </div>
    <div className='navbar-links-container'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contacts</a>
    <div className='login-button'>
        <a href="">Login</a>
    </div>
        
    </div>
    <div className='navbar-menu-container'>
    </div>
  </nav>)
}

export default Navbar
