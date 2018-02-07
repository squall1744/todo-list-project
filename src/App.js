import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        {id:1, title: 'first'}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item, id) => 
      <li>{item.title}</li>
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
