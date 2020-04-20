// todos
// todos methods
import React, {createContext, useReducer} from 'react';
import todoReducer from '../reducers/todo.reducer';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  {id: 1, task: "eat bat", completed: true},
  {id: 2, task: "get corona", completed: false}
];
export const TodosContext = createContext();

export function TodosProvider(props){
  // const todosStuff = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return(
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  )
}

