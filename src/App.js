import React, { Component } from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import 'normalize.css'
import './reset.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: [
      ]
    }
    this.addTodo = this.addTodo.bind(this)

  }

  addTodo(event) {
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })

    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
 
  render() {
    let todos = this.state.todoList.map((item, index) => 
        <TodoItem key={index} todo={item} />
    )
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div> 
    )
  }
}

export default App;

let id = 0 

function idMaker() {
  id =+ 1
  return id
}