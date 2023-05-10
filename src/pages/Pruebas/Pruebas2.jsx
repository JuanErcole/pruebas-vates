import React, { useState } from 'react'
import { Form } from './components/Form'
import Grid from '@mui/material/Grid'
import { TodoList } from './components/TodoList'
import Typography from '@mui/material/Typography'




export const Pruebas2 = () => {

  const [todos, setTodos] = useState([])

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos)
  }

  const handleCheck = (id) => {

    const todoDoneUpdate = todos.find(todo => todo.id === id)
    // todoDoneUpdate.done = true;
    const todoIndex = todos.findIndex( todo => todo.id === id )

    // const newTodos = todos.filter(todo => todo.id !== id);
    // newTodos.push(todoDoneUpdate);

    // setTodos(newTodos);

    todos[todoIndex] = { ...todoDoneUpdate, done: true }

    setTodos([...todos])

  }

  const handleSubmit = (title, desc) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title,
        desc,
        done: false
      }
    ])
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent='center'
      >

        <Grid
          item xs={12}
          textAlign='center'
        >
          <Typography variant="h2">
            pruebas 2
          </Typography>
        </Grid>

        <Form handleSubmit={handleSubmit} />
        <TodoList
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          todos={todos}
        />

      </Grid>
    </>

  )
}
