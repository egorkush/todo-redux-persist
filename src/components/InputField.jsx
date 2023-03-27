const InputField = ({ text, setText, addTodo }) => {
  return (
    <label>
      <input type='text' value={text} onChange={event => setText(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
    </label>
  )
}

export default InputField