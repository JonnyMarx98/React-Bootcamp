import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodoApp() {
  const initTodos = [
    { id: 1, task: "win 50 f1 races", completed: false},
    { id: 2, task: "make gainz", completed: true},
    { id: 3, task: "eat loads of food", completed: false}
  ]
  const [todos, setTodos] = useState(initTodos);
  
  const addTodo = newTodoText => {
    setTodos([...todos, {id: 4, task: newTodoText, completed: false}]);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: "64px"}}>
        <Toolbar>
          <Typography color='inherit'>Hooks Todos ya</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo}/>
          <TodoList todos={todos} />
        </Grid> 
      </Grid>
    </Paper>
  )
}

// TodoApp
//  - TodoForm
//  - TodoList
//      - TodoItem

