import React,{Component} from 'react'

import axios from 'axios'

class Usersregister extends Component {
    state = { 
        username : null, email: null, password: null
     }

     handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
     }
     handleSubmit = (e) =>{
         e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:4000/usersregister',this.state)
        .then(response=>{
            console.log("success")
            setTimeout (()=>{
                alert('Redirecting to Login Page') 
                this.props.history.push('/userslogin')
            },2000)
        })  
        .catch(error=>{
            console.log("error")
        })  
     }

    render() { 
        return (  
            <div className="container"> 
        <h4 className="center">Registration Page </h4>
        <form onSubmit={this.handleSubmit}> 
        <label>Username</label>
        <input type="text" id="username" onChange={this.handleChange}/>
        <label>Email</label>
        <input type="text" id="email" onChange={this.handleChange}/>
        <label>Password</label>
        <input type="text" id="password" onChange={this.handleChange}/>
        <button className="waves-effect waves-light btn-large" >Submit</button>
        </form>
        
        </div>
        );
    }
}
 
export default Usersregister;