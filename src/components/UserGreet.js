import React, { Component } from 'react'

class UserGreet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      logIn: false 
    }
    this.logInUser = this.logInUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
  }

  logInUser() {
    this.setState({ // Whenever you want to change the state of components you must need to use setState Method;
      logIn: true
    });
  }

  logOutUser() {
    this.setState({
      logIn: false
    });
  }
  
  render() {
    if (this.state.logIn){
      return (
        <div>
          Hello Bharat
          <div>
            <button onClick={this.logOutUser}>Log Out</button>
          </div>
        </div>
      );
    } else {
      return (
        <div> 
          Hello Guest Please log in
          <div>
            <button onClick={this.logInUser}>Log In </button>
          </div>
        </div>
      );
    }
    
  }
}

export default UserGreet
