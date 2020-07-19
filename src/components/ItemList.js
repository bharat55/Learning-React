import React from 'react'

function ItemList(props) {
  return (
    <div className="item-list">
      <ul>
        {props.items}  
      </ul>
    </div>
  )
}

export default ItemList
