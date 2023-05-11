import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Prueba1 } from './Prueba1'
import { Prueba2 } from './Prueba2'


const initialState = { 
  component1: false, 
  component2: false
}

const buttons = [
  {
    name: 'component1',
    text: 'Prueba Nro 1'
  },
  {
    name: 'component2',
    text: 'Prueba Nro 2'
  }
]

export const Pruebas = () => {

  const [component, setComponent] = useState(initialState)

  const { component1, component2 } = component;

  const handleClickShowComponent = (component) => {
    setComponent({
      ...initialState,
      [component]: true
    })
  }

  return (
    <Grid 
      // container 
      // spacing={1}
    >
      <Grid 
        item 
        xs={12}
        mb='35px'
        pb='15px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        textAlign='center'
        bgcolor='#f5e1c8'
      >
        <Typography 
          variant="h2"
          color='primary'
          fontWeight='bold'
        >
          Pruebas
        </Typography>
        <Typography variant="h5" my='20px'>
          En esta pagina vamos a ir probando los distintos ejercicos que veamos de React.
        </Typography>
        <Box>
          { 
            buttons.map( button => (
              <Button
                key={ button.name }
                sx={{ mr: 2 }}
                variant='contained'
                onClick={ () => handleClickShowComponent(button.name) }
              >
                { button.text }
              </Button>
            ))
          }
        </Box>
      </Grid>
      { component1 && <Prueba1 />}
      { component2 && <Prueba2 />}
    </Grid>
  )
}
