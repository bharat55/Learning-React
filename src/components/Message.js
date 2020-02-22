import React, { Component } from 'react'

class Message extends Component {
  constructor(){
    super()
    this.state = {
      message: "" 
    }
  }

  changeMessage() {
    this.setState({
      message: "Hello Bharat"
    })
  }

  hideMessage(){
    this.setState({
      message: ""
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Greet Me </button>
        <button onClick={() => this.hideMessage()}>Hide it</button>
      </div>
    )
  }
}

export default Message
