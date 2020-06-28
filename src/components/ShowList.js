import React from 'react'

function ShowList({person}) {
  
  return (
    <div>
      <h2> Hello My name is {person.name} i lived in {person.address} </h2>
    </div>
  )
}

export default ShowList
