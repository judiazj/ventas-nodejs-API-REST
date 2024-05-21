import {Router} from 'express';
import {check, body} from 'express-validator';

import {validarParametros} from '../middlewares/validarParametros.js';
import {checkForeignKeyExists} from '../middlewares/verificarLlavesForaneas.js';

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
    check('idProducto').isInt({min:1}).withMessage('El idProducto debe ser un numero de minimo un digito'),
    body('idProducto').custom(checkForeignKeyExists('producto', 'id_producto')),
    check('idCliente').isInt({min: 1}).withMessage('El idCliente debe ser un numero de minimo un digito'),
    body('idCliente').custom(checkForeignKeyExists('cliente', 'id_cliente')),
    validarParametros
],crearVenta);

router.put('/:id', [
    // Verificar parametros
    check('cantidad').isInt({min: 1}).withMessage('La cantidad debe ser un numero de minimo un digito'),
    check('idProducto').isInt({min:1}).withMessage('El idProducto debe ser un numero de minimo un digito'),
    body('idProducto').custom(checkForeignKeyExists('producto', 'id_producto')),
    check('idCliente').isInt({min: 1}).withMessage('El idCliente debe ser un numero de minimo un digito'),
    body('idCliente').custom(checkForeignKeyExists('cliente', 'id_cliente')),
    validarParametros
],actualizarVentaCompleto);

router.patch('/:id', actualizarVentaParcial);

router.delete('/:id', eliminarVenta);

export default router;