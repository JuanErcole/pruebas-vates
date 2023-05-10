import React, { useState } from 'react'
import { Form } from './components/Form'
import Grid from '@mui/material/Grid'
import { TodoList } from './components/TodoList'
import Typography from '@mui/material/Typography'




export const Prueba2 = () => {

  const [todos, setTodos] = useState([])

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos)
  }

  const handleCheck = (id) => {

    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        }
      } else {
        return todo
      }
    })
    setTodos(newTodos)

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
            Prueba Nro. 2
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
