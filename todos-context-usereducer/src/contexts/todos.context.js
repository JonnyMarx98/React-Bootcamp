// todos
// todos methods
import React, {createContext} from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  {id: 1, task: "eat bat", completed: true},
  {id: 2, task: "get corona", completed: false}
];
export const TodosContext = createContext();

export function TodosProvider(props){
  const todosStuff = useTodoState(defaultTodos);
  return(
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}

