import React,{Component}  from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import { useHistory } from "react-router-dom"
class Login extends Component {
    
    state = { 
         email: null, password: null ,loggedin : false
     }
     
     handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value 
        })
     }
     handleSubmit = (e) =>{
        e.preventDefault();
       //console.log(this.state)
       
       axios.post('http://localhost:4000/userslogin',this.state)
       .then(response=>{
           //console.log(response.data)
           if(response.data==='already logged in'){
           
            alert('already logged in')
           }
           if(response.data==='login again'){
           
            alert('login again')
           }
           if(response.data==='plese register urself'){
           
            alert('plese register urself')
           }
           else{
               this.state.loggedin = true
            //console.log('success')
           // console.log(this.state.loggedin)
            setTimeout (()=>{
               const token = response.data;
               localStorage.setItem('usertoken', token)
               console.log(response.data)
                alert('Redirecting to User Post') 
                this.props.history.push('/userspost')
            },2000)
           }
            
    
       })  
       .catch(error=>{
           console.log("error")
       })  
    }
    render() {
        
        return (
        <div className="container"> 
        <h4 className="center">Login Page </h4>
        <form onSubmit={this.handleSubmit} > 
        
        <label>Email</label>
        <input type="text" id="email" onChange={this.handleChange} />
        <label>Password</label>
        <input type="password" id="password" onChange={this.handleChange}/>
        <button className="waves-effect waves-light btn-large" >Login</button>
        </form>
        
        
        </div>
    )
         
}
}
export default Login