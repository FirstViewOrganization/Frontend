// components/Preview.tsx
import React from "react";
import  Grid from "@mui/material/Grid2";
import { Row, Column } from "./types";

interface PreviewProps {
  rows: Row[];
}

export default function Preview ({ rows }: PreviewProps) {
  return (
    <div>
      {rows.map((row: Row, rowIndex: number) => (
        <Grid container spacing={2} key={row.id} style={{ marginBottom: "16px" }}>
          {row.columns.map((col, colIndex) => (
            <Grid size={{xs:col.size}} key={col.id}>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                Col{colIndex + 1}(T{col.size})
              </div>
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
};