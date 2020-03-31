import React from 'react';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

export default function TodoList({todos, removeTodo, toggleTodo}) {
  return (
    <div style={{listStyleType: "none"}}>
      {todos.map(todo => (
        <>
          <Todo
            id={todo.id} 
            task={todo.task}
            key={todo.id}
            completed={todo.completed}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            // onClick={() => toggleTodo(todo.id)}  
          />
          <Divider/> 
        </>
      ))}
    </div>
  )
}
