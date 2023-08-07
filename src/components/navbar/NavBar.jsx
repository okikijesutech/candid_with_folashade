import './navbar.css'
import {Link} from "react-router-dom"
import { useState } from 'react'

export default function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div className='navBar'>
        <div className="navLeft">
            <img className='logo' src="images/logo.png" alt="" />
        </div>
        <div onClick={() => {setIsNavExpanded(!isNavExpanded) }} className='hamburger'> 
        {/* icon from heroicons.com  */}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
            >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
            </svg>
        </div>
        <div className={ isNavExpanded ? "navigation-menu expanded" : "navCenter" }>
            <ul className="navList">
                <li className="navListItem">
                    <Link to='/' className='link'>HOME</Link>
                </li>
                <li className="navListItem">
                    <Link to="/about" className='link'>ABOUT</Link> 
                </li>
                <li className="navListItem">
                    <Link to='/blogs' className='link'>BLOGS</Link>
                </li>
                <li className='navListItem'>
                    <Link to='https://selar.co/m/folasadeadisa' target="blank" className='link'>SHOP</Link>
                </li>
                <li className="navListItem">
                    <Link to='/write' className='link'>WRITE</Link>
                </li>
                <li className="navListItem">
                    <Link to='https://youtube.com/@rheelshadie' target="blank" className='link'>VIDEO</Link>  
                </li>
            </ul>
        </div>
        <div className="navRight">
                <i className='navIcon fas fa-search'></i>
                <i className="navIcon fa-solid fa-cart-shopping"></i>
        </div>
    </div>
  )
}

