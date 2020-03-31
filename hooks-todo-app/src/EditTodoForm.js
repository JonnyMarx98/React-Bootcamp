import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


export default function EditTodoForm({editTodo, id, task, toggleEdit}) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form onSubmit={e => {
      e.preventDefault();
      editTodo(id, value);
      reset();
      toggleEdit();
    }}>
      <TextField 
        margin="normal" 
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  )
}
