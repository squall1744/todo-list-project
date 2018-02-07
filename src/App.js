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
      newTodo: 'test',
      todoList: [
        {id:1, title: 'first'},
        {id:2, title: 'second'}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item, id) => 
        <TodoItem key={id} todo={item} />
    )
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div> 
    )
  }
}

export default App;
