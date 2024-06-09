import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { Grid } from "@mui/material"

function App() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>(
    [
      { title: "Learn TypeScript", completed: false, priority: 1 },
      { title: "Try out React", completed: true, priority: 2 },
      { title: "Learn more about TypeScript", completed: false, priority: 3 },
    ]
  )

  function addTodoItem(todoItem: TodoItem) {
    setTodoItems([...todoItems, todoItem])
  }

  function check(index: number){
    const newItems = [...todoItems]
    newItems[index].completed = !newItems[index].completed
    setTodoItems(newItems)
  }

  

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
          <TodoList items={todoItems} check={check} />
        </Grid>
    </Grid>
  </div>
  )
}

export default App
