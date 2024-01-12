import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

function Todolist() {


    const todos = useSelector((state) => state)
    return (

        <>
            {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </>

    )
}

export default Todolist