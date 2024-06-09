import { ReactElement } from 'react'
import TodoCard from './TodoCard'


export default function TodoList(props: { 
  items: TodoItem[],
  check: (index: number) => void,
  deleteItem: (index: number) => void
}): ReactElement {

  return (
    <>
        {props.items.map((todo, index) => {
            return TodoCard(todo, index, props.check, props.deleteItem)
        })}
    </>
  )
}
