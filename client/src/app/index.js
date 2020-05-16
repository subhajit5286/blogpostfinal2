import React from 'react'
import Navbar from '../components/Navbar'

import Navbar1 from '../components/Navbar1'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Userspost from '../pages/Userspost'
import Getpost from '../pages/Getpost'
import Usersregister from '../pages/Usersregister'
import Createpost from '../pages/Createpost'
import Editpost from '../pages/Editpost'

function App() {
    return (
        <Router>
        <div  className="App"> 
        <Navbar1 />
        <Route exact path='/' component={Home} />
        <Route path='/userslogin' component={Login} />
        <Route path='/userspost' component={Userspost} />
        <Route path='/post:id' component={Getpost} />
        <Route path='/usersregister' component={Usersregister} />
        <Route path='/createpost' component={Createpost} />
        <Route path='/editpost:id' component={Editpost} />

        </div> 
        </Router >
    )
}

export default App