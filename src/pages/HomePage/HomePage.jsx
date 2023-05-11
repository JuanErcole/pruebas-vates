import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/Card";
import { Form } from "../../components/Form/Form";
import { FormEvents } from "../../components/Form/FormEvents";


export const HomePage = () => {
  return (
    <>
      <Grid container textAlign="center" spacing={2}>
        {/* <Grid item xs={12}>
          <Typography variant="h3" component="h1" m={4}>
            Bienvenido
          </Typography>

          <CardComponent /> 
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" mt="20px">
            Esta es una aplicación de prueba para el curso de React y fastapi.
          </Typography>
        </Grid> */}

        <FormEvents />
      </Grid>
    </>
  );
};
