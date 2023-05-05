import { Grid } from '@mui/material'
import React from 'react'

export const PagesContainer = ({ children }) => {
  return (
    <Grid mt="80px">
      {children}
    </Grid>
  )
}
