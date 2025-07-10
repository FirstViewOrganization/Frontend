export interface GridRowProps {
    row: Row;
    updateRowColumns: (rowId: number, columns: Column[]) => void;
  }

export interface Column {
    id: number;
    size: number; // Tamaño de la columna (1-12)
  }
  
export interface Row {
  id: number;
  columns: Column[]; // columns debe ser un array
}

