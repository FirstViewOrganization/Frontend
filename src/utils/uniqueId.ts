// Función global para generar IDs únicos
let idCounter = 0;
export function generateUniqueId() {
  return ++idCounter;
} 