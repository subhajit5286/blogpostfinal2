import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
    return (
        <nav className="nav-wrapper red darken-3"> 
        <div className="container"> 
        <a className="brand-logo"> Blog-Post </a>
        <ul className="right"> 
        <li><Link to="/"> Post List </Link> </li>
        <li><Link to="/userslogin"> Login </Link> </li>
        <li> <Link to="/usersregister"> Signup </Link></li>
        </ul>
        </div>
        </nav>
        
    )
}

export default Navbar