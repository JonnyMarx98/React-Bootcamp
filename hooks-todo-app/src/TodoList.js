import React from 'react';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

export default function TodoList(props) {
  return (
    <div style={{listStyleType: "none"}}>
      {props.todos.map(todo => (
        <>
          <Todo task={todo.task} key={todo.id} completed={todo.completed} />
          <Divider/> 
        </>
      ))}
    </div>
  )
}
