import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [ text, setText ] = useState('')
  const dispatch = useDispatch()
  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }
  return (
    <div className="App">
      <InputField text={text} setText={setText} addTodo={addTask}/>
      <TodoList />
    </div>
  )
}

export default App
