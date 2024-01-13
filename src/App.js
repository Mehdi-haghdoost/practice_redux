import React, { useEffect, useState } from 'react'
import './App.css';
import Todolist from './Components/Todolist';
import { useDispatch } from 'react-redux';
import { addTodo,getTodosFromServer } from './Redux/store/todos';
function App() {

  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTodosFromServer('https://fakestoreapi.com/products'))
  } , [])

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo({id :1,title, isDone :false}))
  }

  return (
    <>
      <header>
        <h1>Sabzlearn To Do List</h1>
      </header>
      <form action="">
        <input
          type="text"
          className="todo-input"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button className="todo-button" type="submit" onClick={addTodoHandler} >
          <i className="fas fa-plus-circle fa-lg"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          <Todolist />
        </ul>
      </div>
    </>
  );
}

export default App;
