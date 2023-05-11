import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { ButtonsGroup } from "./ButtonsChanges";



const initialStateTasks = {
  tasks: "",
  typeTask: "",
  description: "",
};

export const Form = ({ handleSubmit }) => {
  const [inputsTasks, setInputs] = useState(initialStateTasks);

  const { tasks, typeTask, description } = inputsTasks;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputsTasks,
      [name]: value,
    });
  };

  const onTaskEvent = (e) => {
    e.preventDefault();
    handleSubmit(
      inputsTasks.tasks,
      inputsTasks.typeTask,
      inputsTasks.description
    );
    console.log("Tarea agregada:", inputsTasks);
    setInputs(initialStateTasks);
  };

  return (
    <>
      <Grid
        item
        xs={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        autoComplete="off"
        sx={{
          m: 5,
        }}
      >
        <form
          onSubmit={onTaskEvent}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TextField
            id="standard-basic"
            type="text"
            name="tasks"
            value={tasks}
            variant="standard"
            label="Tarea"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-basic"
            variant="standard"
            value={typeTask}
            type="text"
            name="typeTask"
            label="Tipo de Tarea"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-multiline-static"
            multiline
            rows={5}
            variant="standard"
            value={description}
            type="message"
            name="description"
            label="Descripcion"
            onChange={handleInputChange}
          />
          <ButtonsGroup handleSubmit={handleSubmit}/>
        </form>
        
      </Grid>
    </>
  );
};
