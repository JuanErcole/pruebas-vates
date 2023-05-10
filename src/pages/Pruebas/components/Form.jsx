import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const initialState = {
  title: '',
  description: ''
}

export const Form = ({ handleSubmit }) => {

  const [inputs, setInputs] = useState(initialState)

  const { title, description } = inputs;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onSubmitEvent = (e) => {
    e.preventDefault();
    handleSubmit(inputs.title, inputs.description);
    setInputs(initialState);
  }


  return (
    <Grid
      item
      xs={6}
      display='flex'
      flexDirection='column'
      gap='20px'
    >
      <form 
        onSubmit={onSubmitEvent}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px'  
        }}
      >

        <TextField
          type='text'
          name='title'
          value={title}
          label='Titulo'
          onChange={onInputChange}
        />

        <TextField
          type='text'
          name='description'
          value={description}
          label='Descripcion'
          onChange={onInputChange}
        />
        <Button
          type='submit'
          variant='contained'
        >
          Enviar
        </Button>
      </form>

    </Grid>
  )
}
