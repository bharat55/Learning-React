
import React from 'react'

// const Hello = () => {
//   return(
//     <h1> hello world </h1> //using jsx the library React needs to be important for jsx
//   )
// }

//React must be imported for using jsx

const Hello = () => {
  return(
    React.createElement(
      'div',
      {id: "without-jsx", className: 'test'},
      React.createElement(    //React Needs to be imported for this
        'h1',
        null,
        'Hello World'
      )
      )
  )

}

export default Hello 