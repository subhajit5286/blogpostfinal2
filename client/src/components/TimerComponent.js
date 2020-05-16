import React,{Component} from 'react';

class TimerComponent extends React.Component{
    state = {
      date : new Date(),
      color : "red"
    }
    componentDidMount(){
      setInterval(()=> this.tick(),1000)
    }
    tick(){
      this.setState({date : new Date()})    
      if(this.state.color==="yellow"){
        this.setState({ color : "red"})
      }else{
        this.setState({ color : "yellow"})
      }
}


    render(){
      return(
        <div  >
          <h6 style={{color:this.state.color}}>Current Time :- {this.state.date.toLocaleTimeString()}</h6>
          
        </div>
      )
    }
  }
  
  export default TimerComponent;

