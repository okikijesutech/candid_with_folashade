import './navbar.css'
import {Link} from "react-router-dom"

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="navLeft">
                <img className='logo' src="images/logo.png" alt="" />
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">
                        <Link to='/' className='link'>HOME</Link>
                    </li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">WRITE</li>
                    <li className="navListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="navRight">
                <i className='navIcon fas fa-search'></i>
                <i className="navIcon fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    )
}