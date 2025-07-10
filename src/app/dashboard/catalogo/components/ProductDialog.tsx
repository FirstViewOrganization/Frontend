
"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  Alert
} from "@mui/material";
import { useState, useEffect } from "react";
import { Product, ProductFormData } from "../types";

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (product: ProductFormData) => void;
  product?: Product | null;
}

export default function ProductDialog({ open, onClose, onSave, product }: ProductDialogProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    price: 0,
    image: "",
    category: ""
  });
  const [errors, setErrors] = useState<Partial<ProductFormData>>({});

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        category: product.category
      });
    } else {
      setFormData({
        name: "",
        description: "",
        price: 0,
        image: "",
        category: ""
      });
    }
    setErrors({});
  }, [product, open]);

  const handleChange = (field: keyof ProductFormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = field === 'price' 
      ? parseFloat(event.target.value) || 0 
      : event.target.value;
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ProductFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formData.description.trim()) {
      newErrors.description = "La descripción es requerida";
    }
    if (formData.price <= 0) {
      newErrors.price = "El precio debe ser mayor a 0";
    }
    if (!formData.image.trim()) {
      newErrors.image = "La URL de la imagen es requerida";
    }
    if (!formData.category.trim()) {
      newErrors.category = "La categoría es requerida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData);
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      description: "",
      price: 0,
      image: "",
      category: ""
    });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {product ? "Editar Producto" : "Agregar Nuevo Producto"}
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nombre del Producto"
                value={formData.name}
                onChange={handleChange('name')}
                error={!!errors.name}
                helperText={errors.name}
                margin="normal"
              />
              
              <TextField
                fullWidth
                label="Categoría"
                value={formData.category}
                onChange={handleChange('category')}
                error={!!errors.category}
                helperText={errors.category}
                margin="normal"
              />
              
              <TextField
                fullWidth
                label="Precio"
                type="number"
                value={formData.price}
                onChange={handleChange('price')}
                error={!!errors.price}
                helperText={errors.price}
                margin="normal"
                inputProps={{ min: 0, step: 0.01 }}
              />
              
              <TextField
                fullWidth
                label="URL de la Imagen"
                value={formData.image}
                onChange={handleChange('image')}
                error={!!errors.image}
                helperText={errors.image}
                margin="normal"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Descripción"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange('description')}
                error={!!errors.description}
                helperText={errors.description}
                margin="normal"
              />
              
              {formData.image && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Vista previa:
                  </Typography>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={formData.image}
                      alt="Vista previa"
                      sx={{ objectFit: 'cover' }}
                      onError={() => {
                        setErrors(prev => ({
                          ...prev,
                          image: "URL de imagen inválida"
                        }));
                      }}
                    />
                  </Card>
                </Box>
              )}
            </Grid>
          </Grid>

          {Object.keys(errors).length > 0 && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Por favor corrige los errores antes de continuar.
            </Alert>
          )}
        </Box>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={handleClose}>
          Cancelar
        </Button>
        <Button onClick={handleSave} variant="contained">
          {product ? "Actualizar" : "Agregar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
