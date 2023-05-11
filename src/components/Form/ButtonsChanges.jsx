import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
      
        <Button key="add" variant="outlined" type="submit">
          Agregar Tarea
        </Button>
    </Box>
  );
}
