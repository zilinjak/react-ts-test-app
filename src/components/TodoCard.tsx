import { Box, Checkbox, FormControlLabel, FormGroup, IconButton, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function TodoCard(
  item: TodoItem, 
  index: number,  
  check: (index: number) => void,
  deleteItem: (index: number) => void
) {

    var completed = item.completed

    return (
      <>
      <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius={10}
      marginTop="0.3rem"
      style={{backgroundColor: "rgba(240, 240, 240, 0.8)"}}
      >
        <Box 
        display="flex" 
        alignItems="center">
          <Checkbox checked={completed} onClick={() => check(index)}/>
          <Typography variant="body1" style={completed ? {textDecoration: "line-through"} : {}}>{item.title}</Typography>
        </Box>
        <IconButton onClick={() => deleteItem(index)}>
          <DeleteForeverIcon/>
        </IconButton>

    </Box>
      </>
    )
}