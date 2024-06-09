import { Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useState } from 'react'



export default function TodoInput(props: { addTodo: (todoItem: TodoItem) => void }){
  
  const [input, setInput] = useState<string>("")
  const [inputDisabled, setInputDisabled] = useState<boolean>(true)

  function handleInput(){
    if (input.trim() === ""){
      setInputDisabled(true)
      return
    }
    props.addTodo({
      title: input,
      completed: false,
      priority: 1
    })
    setInputDisabled(true)
    setInput("")
  }

  return (
    <>
    <Box>
      <TextField 
        fullWidth
        variant="standard"
        color="warning"
        focused

        value={input}
        size="small"
        margin='normal'
        label="Add a new item"
        InputProps={
          {endAdornment: 
          <Button 
            onClick={handleInput}
            disabled={inputDisabled}
            color="warning"
          >Add</Button>
          }
        }
        onChange={(e) => {
        setInput(e.target.value)
        setInputDisabled(e.target.value.trim() === "")
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter"){
            handleInput()
          }
        }}
      />
      
    </Box>
    </>
  )
}
