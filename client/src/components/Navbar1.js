import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import TimerComponent from './TimerComponent'

class Navbar1 extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
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
      const userLink = (
        <nav className="nav-wrapper red darken-3"> 
        <div className="container"> 
        <a className="brand-logo"> Blog-Post </a>
        
        <ul className="right"> 
      
        <li><Link to="/createpost"> Create Post </Link> </li>
        <li><Link to="/userspost"> Your Post </Link> </li>
        <li><a href="" onClick={this.logOut.bind(this)} className="nav-link">Logout</a></li>
       
        </ul>
        </div>
        </nav>
      )
      return (
        <div style={{  
          backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
         <TimerComponent />
        {localStorage.usertoken ? userLink : loginRegLink}
        </div>

        )
    }
}
  
  export default withRouter(Navbar1)
  
