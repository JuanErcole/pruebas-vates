import { Grid } from '@mui/material'
import React from 'react'
import { Prueba1 } from './Prueba1'
import { Prueba2 } from './Prueba2'

export const Pruebas = () => {

  return (
    <Grid container spacing={1}>
      <Prueba1 />
      <Prueba2 />
    </Grid>
  )
}
