import React, { Component } from 'react';
 
class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  
  submit(event) {
    if (event.key === 'Enter') {
     this.props.onSubmit.call(this, event)
    
    }
  }

  render() {
    return <input type="text" defaultValue={this.props.content} onKeyPress={this.submit}/>
  }
}

export default TodoInput