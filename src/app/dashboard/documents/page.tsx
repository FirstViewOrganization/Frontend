
"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { 
  Box, 
  Typography, 
  Chip, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Card, 
  CardContent, 
  CardHeader, 
  IconButton,
  Fab,
  Tabs,
  Tab
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

interface DocumentFile {
  id: string;
  name: string;
  type: string;
  size: number;
  category: string;
  uploadDate: Date;
  thumbnail?: string;
  description?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  documentCount: number;
}

const initialCategories: Category[] = [
  { id: '1', name: 'Documentación Técnica', description: 'Manuales, especificaciones y documentos técnicos', color: '#1976d2', documentCount: 3 },
  { id: '2', name: 'Procesos de Negocio', description: 'Procedimientos, metodologías y flujos de trabajo', color: '#388e3c', documentCount: 2 },
  { id: '3', name: 'Recursos Visuales', description: 'Imágenes, diagramas y recursos gráficos', color: '#f57c00', documentCount: 3 },
  { id: '4', name: 'Datos y Reportes', description: 'Archivos de datos, reportes y análisis', color: '#7b1fa2', documentCount: 0 }
];

const initialFiles: DocumentFile[] = [
  { id: '1', name: "Parámetros MACRO", type: "spreadsheet", size: 1024000, category: '1', uploadDate: new Date(), description: "Configuración de parámetros del sistema" },
  { id: '2', name: "OBJETOS MYSQL", type: "spreadsheet", size: 2048000, category: '1', uploadDate: new Date(), description: "Estructura de base de datos" },
  { id: '3', name: "Metodología de Trabajo", type: "pdf", size: 3072000, category: '2', uploadDate: new Date(), description: "Procesos y metodologías internas" },
  { id: '4', name: "lupa_generica.rar", type: "rar", size: 5120000, category: '1', uploadDate: new Date() },
  { id: '5', name: "Listado de Pagos", type: "spreadsheet", size: 1536000, category: '4', uploadDate: new Date() },
  { id: '6', name: "IMG-20231219-WA000", type: "image", size: 2560000, category: '3', uploadDate: new Date() },
  { id: '7', name: "IMG-20230805-WA000", type: "image", size: 1792000, category: '3', uploadDate: new Date() },
  { id: '8', name: "IMG-20230803-WA000", type: "image", size: 2304000, category: '3', uploadDate: new Date() }
];

export default function DocumentsPage() {
  const [files, setFiles] = useState<DocumentFile[]>(initialFiles);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isDragActive, setIsDragActive] = useState(false);
  
  // Dialog states
  const [categoryDialog, setCategoryDialog] = useState(false);
  const [fileDialog, setFileDialog] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingFile, setEditingFile] = useState<DocumentFile | null>(null);
  
  // Form states
  const [newCategory, setNewCategory] = useState({ name: '', description: '', color: '#1976d2' });
  const [fileCategory, setFileCategory] = useState('');
  const [fileDescription, setFileDescription] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      id: Date.now().toString() + Math.random().toString(),
      name: file.name,
      type: file.type,
      size: file.size,
      category: fileCategory || categories[0]?.id || '',
      uploadDate: new Date(),
      description: fileDescription,
      thumbnail: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    setFileCategory('');
    setFileDescription('');
  }, [fileCategory, fileDescription, categories]);

  const { getRootProps, getInputProps, isDragActive: dragging } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    noClick: true
  });

  const getFileIcon = (type: string) => {
    if (type.includes('image')) return <ImageIcon />;
    if (type.includes('pdf')) return <PictureAsPdfIcon />;
    if (type.includes('spreadsheet') || type.includes('excel')) return <DescriptionIcon />;
    return <InsertDriveFileIcon />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleCreateCategory = () => {
    if (newCategory.name.trim()) {
      const category: Category = {
        id: Date.now().toString(),
        ...newCategory,
        documentCount: 0
      };
      setCategories([...categories, category]);
      setNewCategory({ name: '', description: '', color: '#1976d2' });
      setCategoryDialog(false);
    }
  };

  const handleDeleteFile = (fileId: string) => {
    setFiles(files.filter(f => f.id !== fileId));
  };

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(categories.filter(c => c.id !== categoryId));
    setFiles(files.filter(f => f.category !== categoryId));
  };

  const filteredFiles = selectedCategory === 'all' 
    ? files 
    : files.filter(file => file.category === selectedCategory);

  const getCategoryById = (id: string) => categories.find(c => c.id === id);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Conocimiento
      </Typography>
      
      {/* Tabs de Categorías */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={selectedCategory} 
          onChange={(_, value) => setSelectedCategory(value)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Todos los documentos" value="all" />
          {categories.map((category) => (
            <Tab 
              key={category.id}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box 
                    sx={{ 
                      width: 12, 
                      height: 12, 
                      borderRadius: '50%', 
                      backgroundColor: category.color 
                    }} 
                  />
                  {category.name} ({files.filter(f => f.category === category.id).length})
                </Box>
              }
              value={category.id}
            />
          ))}
        </Tabs>
      </Box>

      {/* Área de Drop Zone */}
      <Box {...getRootProps()} sx={{ position: "relative", mb: 3 }}>
        <input {...getInputProps()} />
        
        {dragging && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(25, 118, 210, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              backdropFilter: "blur(2px)"
            }}
          >
            <Card sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h5" color="primary" gutterBottom>
                📄 Suelta los archivos aquí
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Los archivos se agregarán a tu base de conocimiento
              </Typography>
            </Card>
          </Box>
        )}

        {/* Información de categoría seleccionada */}
        {selectedCategory !== 'all' && (
          <Card sx={{ mb: 3, bgcolor: getCategoryById(selectedCategory)?.color + '10' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: getCategoryById(selectedCategory)?.color }}>
                    {getCategoryById(selectedCategory)?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {getCategoryById(selectedCategory)?.description}
                  </Typography>
                </Box>
                <IconButton 
                  onClick={() => handleDeleteCategory(selectedCategory)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        )}

        {/* Grid de archivos */}
        <Grid container spacing={2}>
          {filteredFiles.map((file) => {
            const category = getCategoryById(file.category);
            return (
              <Grid key={file.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardHeader
                    avatar={getFileIcon(file.type)}
                    action={
                      <IconButton onClick={() => handleDeleteFile(file.id)} size="small">
                        <DeleteIcon />
                      </IconButton>
                    }
                    title={
                      <Typography variant="subtitle2" noWrap title={file.name}>
                        {file.name}
                      </Typography>
                    }
                    subheader={formatFileSize(file.size)}
                    sx={{ pb: 1 }}
                  />
                  
                  <CardContent sx={{ pt: 0, flexGrow: 1 }}>
                    {file.description && (
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {file.description}
                      </Typography>
                    )}
                    
                    {category && (
                      <Chip
                        label={category.name}
                        size="small"
                        sx={{ 
                          backgroundColor: category.color + '20',
                          color: category.color,
                          fontWeight: 'medium'
                        }}
                      />
                    )}
                    
                    <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.disabled' }}>
                      {file.uploadDate.toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* FAB para nueva categoría */}
      <Fab
        color="primary"
        aria-label="add category"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => setCategoryDialog(true)}
      >
        <AddIcon />
      </Fab>

      {/* Dialog para nueva categoría */}
      <Dialog open={categoryDialog} onClose={() => setCategoryDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Nueva Categoría de Conocimiento</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Nombre de la categoría"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Descripción"
            value={newCategory.description}
            onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
            margin="normal"
            multiline
            rows={3}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Color</InputLabel>
            <Select
              value={newCategory.color}
              onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
              label="Color"
            >
              <MenuItem value="#1976d2">Azul</MenuItem>
              <MenuItem value="#388e3c">Verde</MenuItem>
              <MenuItem value="#f57c00">Naranja</MenuItem>
              <MenuItem value="#7b1fa2">Púrpura</MenuItem>
              <MenuItem value="#d32f2f">Rojo</MenuItem>
              <MenuItem value="#455a64">Gris</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCategoryDialog(false)}>Cancelar</Button>
          <Button onClick={handleCreateCategory} variant="contained">Crear</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog para configurar archivo antes de subir */}
      <Dialog open={fileDialog} onClose={() => setFileDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Configurar Archivo</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Categoría</InputLabel>
            <Select
              value={fileCategory}
              onChange={(e) => setFileCategory(e.target.value)}
              label="Categoría"
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Descripción (opcional)"
            value={fileDescription}
            onChange={(e) => setFileDescription(e.target.value)}
            margin="normal"
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFileDialog(false)}>Cancelar</Button>
          <Button onClick={() => setFileDialog(false)} variant="contained">Configurar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
