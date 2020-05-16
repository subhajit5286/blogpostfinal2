import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
  
    state = {
        posts: []
        
      };
      componentDidMount=()=> {
        axios.get('http://localhost:4000/')
          .then(response=>{
              /*console.log(response.data)*/
              this.setState({
                posts : response.data
              })
          })
         
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
                    </div>
              </div>
            )
        })
        ) : (
        <div className="center"> No Posts Yet</div>
      )
    return (
        
        <div className="container"> 
        <h4 className="center"> List of all available post </h4>
        {postList}

        
        </div>
    )
}
}
export default Home