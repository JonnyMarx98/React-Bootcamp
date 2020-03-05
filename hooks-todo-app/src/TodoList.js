import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export default function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => (
        <>
          <ListItem>
            <ListItemText>{todo.task}</ListItemText>
          </ListItem>
          <Divider/> 
        </>
      ))}
    </div>
  )
}
