
import React, { Component } from 'react'
import './../TodoList.css';
import ItemList from './ItemList'

class TodoList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      task: "",
      itemList:  []
    }
    this.addItems = this.addItems.bind(this);
    this.addItemsToList = this.addItemsToList.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  removeItem(id){
    var currentList = this.state.itemList;
    var newList = currentList.filter((item) => (
      item.id != id
    ));
    this.setState({
      itemList: newList
    })
  }
  addItems(target){
    this.setState({
      task: target.value
    });
  }
  addItemsToList(event){
    event.preventDefault();
    var currentList = this.state.itemList;
    var length = currentList.length;
    var id = 0;
    if (this.state.task != ""){
      if (length == 0){
        id = 1
      } else {
        id = currentList[length-1].id + 1
      }
      var newItem = {
        id: id,
        item: this.state.task,
      }
      
      currentList.push(newItem)
      this.setState({
        itemList: currentList,
        task: ""
      });
    } else {
      alert("Please Enter a task first !");
    } 
    console.log(this.state.itemList)
  }
  
  render() {
    var items = this.state.itemList.map((item) => (
      <li key={item.id}>{item.item}
        <button className="remove-item-btn"
          onClick = {() => this.removeItem(item.id)}  
        >Remove</button>
      </li>))
    return (
      <div className="container">
        <h2> To-Do List </h2>
        <form className="to-do-form">
          <input placeholder="Enter the task" 
           value = {this.state.task}
           onChange = {(event) => this.addItems(event.target)}
          ></input>
          <button className="add-item-btn" type="submit" onClick = {(event) => (this.addItemsToList(event))} 
          >Add Item</button>
        </form>
        <ItemList items={items}/>
      </div>
    )
  }
}

export default TodoList
