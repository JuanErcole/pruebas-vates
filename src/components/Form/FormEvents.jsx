import React from "react";
import { Form } from "./Form";

export const FormEvents = () => {

   const [todos, setTodos] = useState([]);

//   const handleDelete = (id) => {
//     const newTodos = todos.filter(todo => todo.id !== id);
//     setTodos(newTodos)
//   }

//   const handleCheck = (id) => {

//     const newTodos = todos.map(todo => {
//       if (todo.id === id) {
//         return {
//           ...todo,
//           done: !todo.done
//         }
//       } else {
//         return todo
//       }
//     })
//     setTodos(newTodos)

//   }

  const handleSubmit = (tasks, typeTask, description) => {
    
    setToDos([
      ...toDos,
      {
        id: new Date().getTime(),
        tasks,
        typeTask,
        description,
        done: false,
      },
    ]);
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h2">Prueba Nro. 2</Typography>
        </Grid>
    
        <Form handleSubmit={handleSubmit} />
      </Grid>
    </>
  );
};

