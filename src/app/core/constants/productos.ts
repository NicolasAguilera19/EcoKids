import { producto } from "../interfaces/producto";

export const PRODUCTOS: producto[] = [
  { id: 1, imagen: 'data:image/jpeg;base64,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', nombre: 'Camiseta de la seleccion Argentina.', precio: 1200 },
  { id: 2, imagen: 'https://i0.wp.com/fitonapp.com/wp-content/uploads/shutterstock_1077364058.jpg?resize=623%2C438&ssl=1', nombre: 'Merienda completa de VQTQV.', precio: 150 },
  { id: 2, imagen: 'https://acdn.mitiendanube.com/stores/817/326/products/kinemed_-_d3_tape_-_botellas_-_2-11-d9f99c835a2110bce916950651232427-1024-1024.jpg', nombre: 'Botella deportiva.', precio: 500 },
  { id: 2, imagen: 'https://www.goandance.com/es/media/images-manager/Post%20146/71JrqHRkbEL._UY741_.jpg', nombre: 'Camisa de salir con tela reciclable.', precio: 950 },
];
