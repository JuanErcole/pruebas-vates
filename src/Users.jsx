import { Button, Grid, Typography } from "@mui/material";
import CardComponent from "../../components/Card";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "María",
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
    age: 25,
    img: "https://images.unsplash.com/photo-1678458003508-4dbf0b8cbe26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    name: "Jorge",
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
    age: 28,
    img: "https://plus.unsplash.com/premium_photo-1661759523015-f71f86d87273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  },
  {
    id: 3,
    name: "Roberta",
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
    age: 22,
    img: "https://images.unsplash.com/photo-1550703703-c6f229024ba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

export const UsersCards = () => {
  const [usuarios, setUsuarios] = useState(users);

  const handleDelete = (id) => {
    const filteredUsers = usuarios.filter((user) => user.id !== id);
    setUsuarios(filteredUsers);
  };

  return (
    <Grid container>
      <Grid item xs={12} textAlign='center'>
        <Typography 
          variant="h2" 
          component="h1"
        >
          TurboLab
        </Typography>
      </Grid>
      <Grid 
        item xs={12} 
        m={4}
        display="flex"
        justifyContent="end"
      >
        <Button
          size="small"
          variant="contained"
          onClick={() => setUsuarios(users)}
        >
          Restablecer
        </Button>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" gap="1rem">
        {usuarios.map((user) => (
          <CardComponent
            key={user.id}
            name={user.name}
            desc={user.desc}
            age={user.age}
            img={user.img}
            handleDelete={handleDelete}
            id={user.id}
          />
        ))}
      </Grid>
    </Grid>
  );
};
