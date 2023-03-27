import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoComplete } from '../store/todoSlice'
const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch()
  return (
    <li key={id}>
      <div className='wrap'>
        <div>
        <input type='checkbox' checked={completed} onChange={() => dispatch(toggleTodoComplete({id}))}/>
        <span>{text}</span>
        </div>
        <span className='delete' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
      </div>
    </li>
  )
}

export default TodoItem