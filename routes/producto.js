import {Router} from 'express';
import {check} from 'express-validator';

import {
    obtenerProductos,
    crearProducto,
    actualizarProductoCompleto,
    actualizarProductoParcial,
    eliminarProducto
} from '../controllers/producto.js';

const router = Router();

router.get('/', obtenerProductos);

router.post('/', [
    // Realizar validaciones
    check('descripcion').isLength({min:1}).withMessage('La descripcion es requerida'),
    check('precio').isLength({min: 1}).withMessage('El precio es requerido')
],crearProducto);

router.put('/:id', [
    // Realizar validaciones
    check('descripcion').isLength({min:1}).withMessage('La descripcion es requerida'),
    check('precio').isLength({min: 1}).withMessage('El precio es requerido')
], actualizarProductoCompleto);

router.patch('/:id', actualizarProductoParcial);

router.delete('/:id', eliminarProducto);

export default router;