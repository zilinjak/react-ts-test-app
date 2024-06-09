import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import ListItem from "@mui/material/ListItem";



export default function TodoCard(item: TodoItem, index: number,  check: (index: number) => void) {

    var completed = item.completed

    return (
      <ListItem
      key={index}
      style={{ marginTop: "0.3rem", backgroundColor: "rgba(240, 240, 240, 0.8)", borderRadius: 10}}>
      <FormGroup>
      <FormControlLabel control={<Checkbox checked={completed} style ={{color: "black",}} onChange={() => {
        check(index)
      }} />} label={
        completed ? <del>{item.title}</del> : item.title
      } />
      </FormGroup>

      </ListItem>
    )
}