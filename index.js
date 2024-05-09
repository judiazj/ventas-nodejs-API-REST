import express from 'express';
import cors from 'cors';

import ClientePath from './routes/cliente.js';
import {PORT} from './config.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clientes', ClientePath);

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})