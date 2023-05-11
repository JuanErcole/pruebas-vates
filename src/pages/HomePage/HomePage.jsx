import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useUsers } from '../../api/useUsers'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'





export const HomePage = () => {

  const navigate = useNavigate();

  // const { getUsers } = useUsers();

  // useEffect(() => {
  //   getUsers();
  // }, [])
  

  return (
    <Grid 
      container 
      textAlign='center'
      spacing={2}
    >
      <Grid item xs={12}>
        <Typography variant="h1" color='secondary'>
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
      <Grid item xs={12}>
        <Typography variant="h4">
          para ver las pruebas y ejercicios realizados hasta el momento presiona el boton de abajo.
        </Typography>
        <Button 
          variant='contained' 
          mt='250px'
          onClick={ ()=> navigate('/pruebas') }
        >
          Pruebas
        </Button>
      </Grid>
    </Grid>
  )
}
