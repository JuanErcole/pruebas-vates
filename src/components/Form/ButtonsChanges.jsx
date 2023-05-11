import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FormEvents } from "./FormEvents";

export function ButtonsGroup({ handleSubmit }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
        <Button key="add" variant="outlined" type="submit" onClick={() => handleSubmit("add")}>
          Agregar Tarea
        </Button>
    </Box>
  );
}
