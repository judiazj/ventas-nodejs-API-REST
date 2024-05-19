import {Router} from 'express';

import {
    obtenerVentas,
    crearVenta,
    actualizarVentaCompleto,
    actualizarVentaParcial,
    eliminarVenta
} from '../controllers/venta.js';

const router = Router();

router.get('/', obtenerVentas);

router.post('/', crearVenta);

router.put('/', actualizarVentaCompleto);

router.patch('/', actualizarVentaParcial);

router.delete('/', eliminarVenta);

export default router;