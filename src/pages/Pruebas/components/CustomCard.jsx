import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export const CustomCard = ({ name, age, desc, img, handleClickDelete, id }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight={400}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid item xs={12} display='flex' justifyContent='space-between'>
          <Typography variant='h6' color="secondary">
            Edad: {age}
          </Typography>
          <DeleteIcon
            color='error' 
            onClick={ () => handleClickDelete(id) }
            sx={{ cursor: 'pointer' }} 
          />
        </Grid>
      </CardActions>
    </Card>
  );
}