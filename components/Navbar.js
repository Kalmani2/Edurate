import React, { useState } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2"
import HomeIcon from "@mui/icons-material/Home"
import './styleSheet.css';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
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
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
    </div>
  </nav>)
}

export default Navbar
