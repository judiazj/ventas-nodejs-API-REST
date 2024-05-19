import express from 'express';
import cors from 'cors';

import ClientePath from './routes/cliente.js';
import ProductoPath from './routes/producto.js';
import VentaPath from './routes/venta.js';
import {PORT} from './config.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clientes', ClientePath);
app.use('/api/productos', ProductoPath);
app.use('/api/ventas', VentaPath);

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})