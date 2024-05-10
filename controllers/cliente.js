import {request, response} from 'express';
import {validationResult} from 'express-validator';

import pool from '../connection.js';

const validarParametros = (req, res) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }
}

export const obtenerCliente = async(req = request, res = response) => {
    try {
        const {rows} = await pool.query('SELECT * FROM cliente ORDER BY id_cliente');
        
        res.json({
            ok: true,
            msg: 'Obteniendo clientes',
            clientes: rows
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg:'Existe un error en la conexion'
        })
        console.log(error);
    }
};

export const crearCliente = async(req = request, res = response) => {
    validarParametros(req, res);
    const {nombre, direccion, telefono, ciudad} = req.body;

    try {
        await pool.query(`INSERT INTO cliente (nombre, direccion, telefono, ciudad)
                                             VALUES ($1, $2, $3, $4)`, [nombre, direccion, telefono, ciudad]) ;
        const {rows} = await pool.query('SELECT id_cliente FROM cliente ORDER BY id_cliente DESC LIMIT 1');
        
        res.status(201).json({
            ok: true,   
            msg: `Cliente creado con exito`,
            id: rows[0].id_cliente
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg:'El cliente no fue creado'
        })
        console.log(error);
    }
};

export const actualizarClienteCompleto = async(req = request, res = response) => {
    validarParametros(req, res);

    const {id} = req.params;
    const {nombre, direccion, telefono, ciudad} = req.body;
    try {
        const {rows} = await pool.query('SELECT id_cliente FROM cliente ORDER BY id_cliente DESC LIMIT 1');
        
        if(id > rows[0].id_cliente){
            return res.status(404).json({msg: `El cliente con id: ${id} no fue encontrado`});
        }
    
        await pool.query(`UPDATE cliente SET nombre = $2, direccion = $3, telefono = $4,
                                        ciudad = $5 WHERE id_cliente = $1`, [id, nombre, direccion, telefono, ciudad]);
        res.json({
            ok: true,
            msg: 'Cliente actualizado',
            id
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg:'El cliente no pudo ser actualizado'
        })
        console.log(error);
    }


};

export const actualizarClienteParcial = async(req = request, res = response) => {
    const {id} = req.params;
    const {nombre, direccion, telefono, ciudad} = req.body;
    try {
        const {rows} = await pool.query('SELECT id_cliente FROM cliente ORDER BY id_cliente DESC LIMIT 1');
        
        if(id > rows[0].id_cliente){
            return res.status(404).json({msg: `El cliente con id: ${id} no fue encontrado`});
        }
    
        await pool.query(`UPDATE cliente SET nombre = COALESCE($2,nombre), direccion = COALESCE($3,direccion), telefono = COALESCE($4,telefono),
                                        ciudad = COALESCE($5,ciudad) WHERE id_cliente = $1`, [id, nombre, direccion, telefono, ciudad]);
        res.json({
            ok: true,
            msg: 'Cliente actualizado',
            id
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg:'El cliente no pudo ser actualizado'
        })
        console.log(error);
    }
};

export const eliminarCliente = async(req = request, res = response) => {
    const {id} = req.params;
    try {
        await pool.query('DELETE FROM cliente WHERE id_cliente = $1', [id]);
        res.json({
            ok: true,
            msg: 'El cliente ha sido eliminado con exito',
            id
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'El cliente no pudo ser eliminado'
        })
        console.log(error);
    }
};
