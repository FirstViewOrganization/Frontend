// components/GridRow.tsx
import { useState } from "react";
import { TextField, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete"; // Icono de eliminar
import { GridRowProps, Column } from "./types";

export default function GridRow({ row, updateRowColumns }: GridRowProps) {
  const [columns, setColumns] = useState<Column[]>(row.columns);

  const handleColumnSizeChange = (columnId: number, newSize: number) => {
    const updatedColumns = columns.map((col) =>
      col.id === columnId ? { ...col, size: newSize } : col
    );

    // Asegurarse de que la suma no exceda 12
    const totalSize = updatedColumns.reduce((sum, col) => sum + col.size, 0);
    if (totalSize <= 12) {
      setColumns(updatedColumns);
      updateRowColumns(row.id, updatedColumns);
    } else {
      alert("La suma de los tamaños de las columnas no puede exceder 12.");
    }
  };

  const addColumn = () => {
    const newColumn: Column = {
      id: Date.now(), // Identificador único
      size: 1, // Tamaño inicial de la nueva columna
    };

    // Verificar que al agregar la nueva columna no se exceda el límite de 12
    const totalSize = columns.reduce((sum, col) => sum + col.size, 0);
    if (totalSize + newColumn.size <= 12) {
      const updatedColumns = [...columns, newColumn];
      setColumns(updatedColumns);
      updateRowColumns(row.id, updatedColumns);
    } else {
      alert("No se puede agregar más columnas. La suma excedería 12.");
    }
  };

  const deleteColumn = (columnId: number) => {
    const updatedColumns = columns.filter((col) => col.id !== columnId);
    setColumns(updatedColumns);
    const totalSize = updatedColumns.reduce((sum, col) => sum + col.size, 0);
    updateRowColumns(row.id, updatedColumns);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {columns.map((col, index) => (
          <Grid size={{xs:col.size}} key={col.id}>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                textAlign: "center",
                position: "relative", // Para posicionar el botón de eliminar
              }}
            >
              <TextField
                type="number"
                label={`Tamaño Columna ${index + 1}`}
                value={col.size}
                inputProps={{ min: 1, max: 12 }}
                onChange={(e) =>
                  handleColumnSizeChange(col.id, parseInt(e.target.value, 10))
                }
              />
              <IconButton
                aria-label="delete"
                onClick={() => deleteColumn(col.id)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  color: "red",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        onClick={addColumn}
        style={{ marginTop: "16px" }}
      >
        Agregar Columna
      </Button>
    </div>
  );
}