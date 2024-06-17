import { useState, useReducer } from 'react'
import './App.css'
import Heading from './Components/heading'
import initialState from './data/toDoItems'
import ToDoItem from './Components/ToDoItem'

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":

      return [
        {
          "id": state.length + 1,
          "title": action.payload,
          "completed": false
        },
        ...state
      ]

    default: return state;
  }
}

function App() {

  const [todos, dispatch] = useReducer(reducer, initialState)

  const handleInputText = (e) => {

    e.preventDefault()

    dispatch(
      {
        type: "ADD_ITEM",
        payload: e.target[0].value
      }
    )
  }

  return (
    <>

      <Heading text="Todo List" />

      <form onSubmit={handleInputText} action="">
        <input placeholder='Add Item' type="text" id="addInput" />
      </form>

      <br />

      {
        todos.map((todo) => {
          return <ToDoItem key={todo.id} todo={todo} />
        })
      }

    </>
  )
}

export default App
