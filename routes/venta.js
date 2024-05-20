import {Router} from 'express';
import {check} from 'express-validator';

import {
    obtenerVentas,
    crearVenta,
    actualizarVentaCompleto,
    actualizarVentaParcial,
    eliminarVenta
} from '../controllers/venta.js';

const router = Router();

router.get('/', obtenerVentas);

router.post('/',[
    // Verificar parametros
    check('cantidad').isInt({min: 1}).withMessage('La cantidad debe ser un numero de minimo un digito'),
    check()
],crearVenta);

router.put('/', actualizarVentaCompleto);

router.patch('/', actualizarVentaParcial);

router.delete('/', eliminarVenta);

export default router;