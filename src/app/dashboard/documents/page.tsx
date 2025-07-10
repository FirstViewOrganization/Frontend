"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent, Typography, IconButton, CardMedia, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid2"

const initialFiles = [
  { name: "Parámetros MACRO", type: "spreadsheet", thumbnail: "/spreadsheet.png" },
  { name: "OBJETOS MYSQL", type: "spreadsheet", thumbnail: "/spreadsheet.png" },
  { name: "Metodología de Trabajo", type: "pdf", thumbnail: "/pdf.png" },
  { name: "lupa_generica.rar", type: "rar", thumbnail: "/rar.png" },
  { name: "Listado de Pagos", type: "spreadsheet", thumbnail: "/spreadsheet.png" },
  { name: "IMG-20231219-WA000", type: "image", thumbnail: "/image1.png" },
  { name: "IMG-20230805-WA000", type: "image", thumbnail: "/image2.png" },
  { name: "IMG-20230803-WA000", type: "image", thumbnail: "/image3.png" }
];

export default function FileGrid() {
  const [files, setFiles] = useState(initialFiles);
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles: any[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      name: file.name,
      type: file.type,
      thumbnail: URL.createObjectURL(file)
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive: dragging } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    noClick: true
  });

  return (
    <Box {...getRootProps()} sx={{ position: "relative", p: 2 }}>
      <input {...getInputProps()} />
      
      {/* Efecto visual del Dropzone activo */}
      {dragging && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            zIndex: 10
          }}
        >
          Suelta aquí para subir archivos
        </Box>
      )}

      {/* Grilla de archivos */}
      <Grid container spacing={2}>
        {files.map((file, index) => (
          <Grid key={index} size={{xs:6, sm:4, md:3, lg:2}}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={file.thumbnail}
                alt={file.name}
              />
              <CardContent>
                <Typography variant="body2" noWrap>{file.name}</Typography>
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
