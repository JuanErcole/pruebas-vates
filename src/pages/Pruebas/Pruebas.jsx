import React, { useState } from 'react'
import { Typography, Grid, Fab } from '@mui/material'
import { CustomCard } from './components/CustomCard'
import AddIcon from '@mui/icons-material/Add';

const user = [
  {
    id: 1,
    name: 'Rocio',
    age: 25,
    desc: 'Esta seria la mejor descripcion del mundo.',
    imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    name: 'Jorge',
    age: 26,
    desc: 'Esta seria la mejor descripcion del mundo.',
    imgUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    id: 3,
    name: 'Carlitox',
    age: 27,
    desc: 'Esta seria la mejor descripcion del mundo.',
    imgUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  }
]

export const Pruebas = () => {

  const [usuarios, setUsuarios] = useState(user);

  const handleDeleted = (id) => {
    const deleteUsers = usuarios.filter(user => user.id !== id);
    setUsuarios(deleteUsers);
  }

  const addUser = () => {
    
    const newUser = {
      id: new Date().getTime(),
      name: 'Juan',
      age: 28,
      desc: 'Esta seria la mejor descripcion del mundo.',
      imgUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
    setUsuarios([...usuarios, newUser]);
  }


  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign='center'>
          <Typography variant='h2'>
            Pruebas
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign='center'>
          <Typography variant='h4' fontWeight={600} color='secondary'>
            Users
          </Typography>
        </Grid>
        <Grid
          item xs={12}
          display='flex'
          justifyContent='center'
          gap='25px'
        >
          {usuarios.map(user => (
            <CustomCard
              key={user.id}
              age={user.age}
              name={user.name}
              desc={user.desc}
              img={user.imgUrl}
              handleClickDelete={handleDeleted}
              id={user.id}
            />
          ))}
        </Grid>
        <Fab 
          color="primary" 
          aria-label="add"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          onClick={ ()=> addUser() }
        >
          <AddIcon />
        </Fab>
      </Grid>
    </>
  )
}
