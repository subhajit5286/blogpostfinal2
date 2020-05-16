import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
//import jwt_decode from 'jwt-decode'


class Userspost extends Component {
  
    state = {
        posts:[]
        
        
      };

      // onclick = (e) =>{
      //   e.preventDefault();
      //   alert('creating post') 
      //   this.props.history.push('/postsb')
      // }

      componentDidMount=()=> {
   const token = localStorage.usertoken
    //const decoded = jwt_decode(token)
     axios.get('http://localhost:4000/userspost',{ headers: {"Authorization" : token} })

           .then(response=>{
             console.log(response.data)
             this.setState({
              posts : response.data
            })
              
           })       
      }
       handleClick=(id)=>{
        console.log(id);
        axios.delete('http://localhost:4000/post'+id)
          .then((result) => {
            alert('deleting post..')
            this.props.history.push("/Createpost")
          });
      }
      handleClick1=(id)=>{
        console.log(id);
        
            this.props.history.push("/Editpost"+id)
         
      }
      

    render(){
      
      const {posts} = this.state
      const postList = posts.length ? (
        posts.map(post=>{
            return(
              <div className="post card" key={post._id}>
                    <div className="card-content"> 
                    <Link to={'/post'+post._id}>
                    <span className="card-title"> {post.title}</span>
                    </Link>
                    <button className="btn waves-effect waves-light green" onClick={()=>{this.handleClick1(post._id)} }> Edit </button> 
                    <button className="btn waves-effect waves-light red"onClick={()=>{this.handleClick(post._id)} }>Delete</button>
                    </div>
              </div>
            )
        })
        ) : (
        <div className="center"> No Posts Yet</div>
      )
    return (
        
        <div  className="container"> 
        <h4 className="center"> List of all available post </h4>
        
        
        {postList}

        
        </div>
    )
}
}
export default Userspost