import React, { Component } from 'react'


//Props example for functional components

// const Welcome = (props) => {
//   return (
//     <div>
//       <h1> Hello {props.name} your city is {props.city} </h1>
//       {props.children}
//     </div>
//   )
// }

// props example for class components 
class Welcome extends Component {
  render (){
    return (
      <div>
        <h1> Hello {this.props.name} your city is {this.props.city}</h1>
        {this.props.children}
      </div>
    )
  }
}


export default Welcome 