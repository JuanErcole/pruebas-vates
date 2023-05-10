import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const CustomLink = ({page, prueba }) => {
  return (
    
    <Button variant='outlined'>
      <Link to={`/${page}/${prueba.id}`} >
        <Typography variant='h5'>
          {prueba.button}
        </Typography>
      </Link>
    </Button>
    
  )
}



