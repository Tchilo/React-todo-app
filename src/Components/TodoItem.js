import React from 'react'

export default class TodoItem extends React.Component{
  render(){

    return <li>
    <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)} /> <button onClick={() =>this.props.handleDelete(this.props.todo.id)}>Delete</button> {this.props.todo.title}
    </li>
  }  
}
