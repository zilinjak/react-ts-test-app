import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { Grid } from "@mui/material"

const DEFAULT_TODOS = [
  { title: "Learn TypeScript", completed: false, priority: 1 },
  { title: "Try out React", completed: true, priority: 2 },
  { title: "Learn more about TypeScript", completed: false, priority: 3 },
]

function App() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>(
    []
  )

  function addTodoItem(todoItem: TodoItem) {
    setTodoItems([...todoItems, todoItem])
    saveItems([...todoItems, todoItem])
  }

  function check(index: number){
    const newItems = [...todoItems]
    newItems[index].completed = !newItems[index].completed
    setTodoItems(newItems)
    saveItems(newItems)
  }

  function deleteItem(index: number){
    const newItems = [...todoItems]
    newItems.splice(index, 1)
    setTodoItems(newItems)
    saveItems(newItems)
  }

  function saveItems(newItems: TodoItem[]){
    localStorage.setItem('todos', JSON.stringify({todos: newItems}))
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    setTodoItems(JSON.parse(localTodos).todos as TodoItem[])
  }, DEFAULT_TODOS)


  return (
    <div className="main">
      <Grid container spacing={2}>
      <Grid item xs={2}>
          <TodoInput addTodo={addTodoItem} />
        </Grid>
        <Grid item xs={4}/>
        <Grid item xs={4}/>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <TodoList items={todoItems} check={check} deleteItem={deleteItem}/>
        </Grid>
    </Grid>
  </div>
  )
}

export default App
