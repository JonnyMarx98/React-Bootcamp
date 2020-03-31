import React from 'react';
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


export default function Todo({task, completed, removeTodo, toggleTodo, editTodo, id}) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{listStyleType: "none"}}>
      {isEditing ? <EditTodoForm id={id} editTodo={editTodo} task={task} toggleEdit={toggle}/> :
      <> 
      <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
      <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <DeleteIcon/>
        </IconButton>
        <IconButton aria-label="Edit" onClick={toggle}>
          <EditIcon/>
        </IconButton>
      </ListItemSecondaryAction>
      </>
      }
    </ListItem>
  )
}
