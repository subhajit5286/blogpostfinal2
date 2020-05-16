import React,{Component} from 'react'

import axios from 'axios'

class Getpost extends Component {
    state = {
        post : null
    }
    componentDidMount(){
        /*console.log(this.props)*/
        let id = this.props.match.params.id;
        axios.get('http://localhost:4000/post'+id)
        .then(response=>{
            this.setState({
                post : response.data
            })
            /*console.log(response)*/
        })
       
    }

    render() { 

        const post = this.state.post ? (
            <div className="post"> 
            <h4 className="center"> {this.state.post.title} </h4>
            <h6 className="center"> Created By--{this.state.post.username} </h6>
            <h5 className="center"> Description:{this.state.post.description} </h5>
            <h6 className="center"> Created At--{this.state.post.createdAt} </h6>
            <p className="left"> {this.state.post.content} </p>
            </div>
        ) : (
            <div className="center"> Loading post ...</div>
        )
        return ( 
            <div className="container"> 
                    <h4 > {post}</h4>
                    </div>
         );
    }
}
 
export default Getpost;