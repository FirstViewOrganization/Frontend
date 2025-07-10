
"use client";
import { useState } from "react";
import { Box, Button, Typography, Grid, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProductCard from "./components/ProductCard";
import ProductDialog from "./components/ProductDialog";
import { Product } from "./types";

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Smartphone Premium",
    description: "Smartphone de última generación con cámara de 108MP y pantalla AMOLED",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "Tecnología"
  },
  {
    id: "2",
    name: "Laptop Gaming",
    description: "Laptop gaming con RTX 4060 y procesador Intel i7",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    category: "Tecnología"
  },
  {
    id: "3",
    name: "Auriculares Inalámbricos",
    description: "Auriculares con cancelación de ruido y sonido de alta fidelidad",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    category: "Audio"
  }
];

export default function CatalogoPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setOpenDialog(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setOpenDialog(true);
  };

  const handleSaveProduct = (product: Omit<Product, 'id'>) => {
    if (editingProduct) {
      // Editar producto existente
      setProducts(prev => prev.map(p => 
        p.id === editingProduct.id 
          ? { ...product, id: editingProduct.id }
          : p
      ));
    } else {
      // Agregar nuevo producto
      const newProduct: Product = {
        ...product,
        id: Date.now().toString()
      };
      setProducts(prev => [...prev, newProduct]);
    }
    setOpenDialog(false);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Catálogo de Productos
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddProduct}
        >
          Agregar Producto
        </Button>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          </Grid>
        ))}
      </Grid>

      {products.length === 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No hay productos en el catálogo
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Agrega tu primer producto para comenzar
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddProduct}
          >
            Agregar Primer Producto
          </Button>
        </Box>
      )}

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={handleAddProduct}
      >
        <AddIcon />
      </Fab>

      <ProductDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSave={handleSaveProduct}
        product={editingProduct}
      />
    </Box>
  );
}
