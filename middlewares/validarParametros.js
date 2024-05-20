import {validationResult} from 'express-validator';

export const validarParametros = (req, res, next) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    next();
}
