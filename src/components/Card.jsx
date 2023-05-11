import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DialogButton from "./DialogButton";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export default function CardComponent({ id, name, desc, age, img, handleDelete }) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia sx={{ height: 250, width: 300 }} component='img' image={img} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hola me llamo {name} y tengo {age} años
        </Typography>
      </CardContent>
      <CardActions>
        <DialogButton name={name} desc={desc}/>
        <IconButton aria-label="delete">
          <DeleteIcon size="small" onClick={() => handleDelete(id)} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
