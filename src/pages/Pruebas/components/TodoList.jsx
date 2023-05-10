import React from 'react'
import Grid from '@mui/material/Grid'
import { Button, Checkbox, Typography } from '@mui/material';

export const TodoList = ({ todos, handleDelete, handleCheck }) => {

  console.log(todos);


  return (
    <>
      {todos.length === 0
        ? <Typography>
          No hay tareas
        </Typography>
        : <Grid item xs={12}>
          <ul>
            {todos.map(todo => (
              <React.Fragment key={todo.id}>
                <li
                  onClick={() => handleDelete(todo.id)}
                  
                >

                  <Typography variant='h4'>
                    {todo.title}
                  </Typography>

                  <Typography variant='h6'>
                    {todo.desc}
                  </Typography>

                  {/* <Button 
                      variant='outlined' 
                      onClick={ () => handleDelete(todo.id) }
                    >
                    <Typography>
                    completado
                    </Typography>
                  </Button> */}

                </li>
                { !todo.done ? <Checkbox onClick={ ()=> handleCheck(todo.id) } /> : <Typography>completado</Typography>}
                
              </React.Fragment>
            ))}
          </ul>
        </Grid>
      }

    </>
  )
}
