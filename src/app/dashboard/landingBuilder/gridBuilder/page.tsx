// pages/index.tsx
import { useState } from "react";
import { Button, Divider } from "@mui/material";
import GridRow from "./gridRow";
import styles from "./style.module.css";
import { Row, Column } from "./types";
import Preview from "./preview";

export default function Home() {
  const [rows, setRows] = useState<Row[]>([]);

  const addRow = () => {
    const newRow: Row = {
      id: Date.now(), // Identificador único
      columns: [{ id: Date.now(), size: 6 }], // Columna inicial con tamaño 6
    };
    setRows([...rows, newRow]);
  };

  const updateRowColumns = (rowId: number, columns: Column[]) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, columns } : row
      )
    );
  };

  return (
    <div className={styles.container}>
      <Button variant="contained" onClick={addRow}>
        Agregar Fila
      </Button>
      {rows.map((row) => (
        <div key={row.id} className={styles.row}>
          <GridRow row={row} updateRowColumns={updateRowColumns} />
        </div>
      ))}
      <Divider sx={{marginY:5}}></Divider>
      <Preview rows={rows}></Preview>
    </div>
  );
}