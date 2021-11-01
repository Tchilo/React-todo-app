import React from 'react'
import styles from './TodoItem.module.css'

export default class TodoItem extends React.Component{
  
  completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  render() {
    const { completed, id, title } = this.props.todo
    return <li className={styles.item}>
    <input className={styles.checkbox} type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)} />
     <button onClick={() =>this.props.handleDelete(id)}>Delete</button> 
     <span style={this.props.todo.completed? this.completedStyle : null}>
      {title}
     </span>
    </li>
  };  
};
