import React from 'react'
import styles from './TodoItem.module.css'

export default class TodoItem extends React.Component{
  
  completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  state ={
    editing: false
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }
  render() {
    const { completed, id, title } = this.props.todo
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = 'none'
    }else {
      editMode.display = 'none'
    }

    return <li className={styles.item}>
    <div onClick={this.handleEditing}>
    <input className={styles.checkbox} type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)} />
     <button onClick={() =>this.props.handleDelete(id)}>Delete</button> 
     <span style={this.props.todo.completed? this.completedStyle : null}>
      {title}
     </span>
     </div>
     <input type="text" style={editMode} className={styles.textInput} vlaue={title} onChange={e => {this.props.setUpdate(e.target.value, id)}} />
    </li>
  };  
};
