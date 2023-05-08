import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'



export const HomePage = () => {


  return (
    <Grid 
      container 
      textAlign='center'
      spacing={2}
    >
      <Grid item xs={12}>
        <Typography variant="h1">
          Bienvenido
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" mt='20px'>
          Esta es una aplicación de prueba para el curso de React y fastapi.
        </Typography>
        <Typography variant="h6" mt='20px' px='150px'>
          Esta es una aplicación donde reuniremos toda la informacion relevante y documentacion necesaria para trabajar en conjunto, facilitando un solo lugar donde podamos consultar dudas o errores que nos hayan pasado, para asi lograr un mejor aprendizaje entre todos.
        </Typography>
      </Grid>
    </Grid>
  )
}
