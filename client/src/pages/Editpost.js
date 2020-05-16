import React,{Component} from 'react'

import axios from 'axios'

class Editpost extends Component {
    state = { 
       id:null, username : null, title: null, description: null , content : null
     }
     componentDidMount(){
        /*console.log(this.props)*/
        let id = this.props.match.params.id;
        axios.get('http://localhost:4000/post'+id)
        .then(response=>{
            this.setState({
                username : response.data.username,
                title : response.data.title,
                description : response.data.description,
                content : response.data.content

            })
            console.log(this.state.username)
        })
       
    }

     handleChange = (e) =>{
        this.setState({
            id:this.props.match.params.id,
            [e.target.id] : e.target.value
        })
     }
     handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        const token = localStorage.usertoken
        if(token){
        axios.put('http://localhost:4000/post'+this.state.id,this.state)
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
        <h4 className="center">Edit Post Page </h4>
        <h4 className="center">{this.state.username} </h4>
        <form onSubmit={this.handleSubmit}> 
        <label>Username</label>
        <input type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
        <label>Title</label>
        <input type="text" id="title" value={this.state.title} onChange={this.handleChange}/>
        <label>Description</label>
        <input type="text" id="description" value={this.state.description} onChange={this.handleChange}/>
        <label>Content</label>
        <input type="text" id="content" value={this.state.content} onChange={this.handleChange}/>
        <button className="waves-effect waves-light btn-large" >Submit</button>
        </form>
        
        </div>
        );
    }
}
 
export default Editpost;