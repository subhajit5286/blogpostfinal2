import React,{Component} from 'react'

import axios from 'axios'

class Createpost extends Component {
    state = { 
        username : null, title: null, description: null , content : null
     }

     handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
     }
     handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        const token = localStorage.usertoken
        if(token){
        axios.post('http://localhost:4000/postsb',this.state)
        .then(response=>{
            console.log("success")
            setTimeout (()=>{
                alert('Redirecting to Userspost Page') 
               this.props.history.push('/userspost')
            },2000)
        })  
        .catch(error=>{
            console.log("error")
        })  
    }
    if(!token){
        setTimeout (()=>{
            alert('Not valid User Redirecting to Home Page') 
           this.props.history.push('/')
        },2000)
     }
    }

    render() { 
        return (  
            <div className="container"> 
        <h4 className="center">New Post Creation Page </h4>
        <form onSubmit={this.handleSubmit}> 
        <label>Username</label>
        <input type="text" id="username" onChange={this.handleChange}/>
        <label>Title</label>
        <input type="text" id="title" onChange={this.handleChange}/>
        <label>Description</label>
        <input type="text" id="description" onChange={this.handleChange}/>
        <label>Content</label>
        <input type="text" id="content" onChange={this.handleChange}/>
        <button className="waves-effect waves-light btn-large" >Submit</button>
        </form>
        
        </div>
        );
    }
}
 
export default Createpost;