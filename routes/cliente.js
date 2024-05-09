import {Router} from 'express';
import {check} from 'express-validator';

import {
    obtenerCliente,
    crearCliente, 
    actualizarClienteCompleto
} from '../controllers/cliente.js';

const router = Router();
(req, res) => {
    res.json({
        msg: 'Cliente API-PUT'
    })
}
router.get('/', obtenerCliente);

router.post('/',[
    // Reglas de validacion
    check('nombre').isLength({min:1}).withMessage('El nombre es requerido'),
    check('direccion').isLength({min:1}).withMessage('La direccion es requerido'),
    check('telefono').isLength({min:1}).withMessage('El telefono es requerido'),
    check('ciudad').isLength({min:1}).withMessage('La ciudad es requerido')
] , crearCliente);

router.put('/:id',[
    // Reglas de validacion
    check('nombre').isLength({min:1}).withMessage('El nombre es requerido'),
    check('direccion').isLength({min:1}).withMessage('La direccion es requerido'),
    check('telefono').isLength({min:1}).withMessage('El telefono es requerido'),
    check('ciudad').isLength({min:1}).withMessage('La ciudad es requerido')
], actualizarClienteCompleto);

router.patch('/:id', (req, res) => {
    res.json({
        msg: 'Cliente API-PATCH'
    })
});

router.delete('/:id', (req, res) => {
    res.json({
        msg: 'Cliente API-DELETE'
    })
});

export default router;