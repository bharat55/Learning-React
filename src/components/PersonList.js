import React from 'react'
import ShowList from './ShowList'

function PersonList() {
  let persons = [
    {
      id: 1,
      name: "Bharat",
      address: "Nalkheda",
    },
    {
      id: 2,
      name: "Ajay",
      address: "Palsoda",
    },
    {
      id: 3,
      name: "Ashvin",
      address: "devran",
    },
  ]

  let personList = persons.map((person) => (<ShowList key={person.id} person={person}/>)) //key attr is must while working with the list 
  
  return (
    <div>
      {personList}
    </div>
  )
}

export default PersonList
