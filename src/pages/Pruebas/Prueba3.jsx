import RHForm from './components/RHForm'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'




export const Prueba3 = () => {

  

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
            Prueba Nro. 3
          </Typography>
        </Grid>

        <RHForm/>

      </Grid>
    </>

  )
}
