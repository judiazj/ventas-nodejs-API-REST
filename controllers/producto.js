import { request,response } from 'express';
import {validationResult} from 'express-validator';
import pool from '../connection.js';

const validarParametros = (req = request, res = response) => {
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }
}

export const obtenerProductos = async(req = request, res= response) => {
    try {
        const {rows} = await pool.query('SELECT * FROM producto ORDER BY id_producto');

        res.json({
            ok: true,
            msg: 'Obteniendo clientes',
            clientes: rows 
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en la conexion'
        });
    }

}

export const crearProducto = async(req = request, res= response) => {
    validarParametros(req, res);
    const {descripcion, precio} = req.body;
    try {
        await pool.query('INSERT INTO producto (descripcion,precio) VALUES ($1, $2)', [descripcion, precio]);
        const {rows} = await pool.query('SELECT id_producto FROM producto ORDER BY id_producto DESC LIMIT 1');
        res.status(201).json({
            ok: true,
            msg: 'Producto creado con exito',
            id: rows[0].id_producto
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'El producto no se pudo crear'
        });
        console.log(error);
    }
}

export const actualizarProductoCompleto = async(req = request, res= response) => {
    validarParametros(req, res);
    const {id} = req.params;
    const {descripcion, precio} = req.body;
    try {
        const {rows} = await pool.query('SELECT id_producto FROM producto ORDER BY id_producto DESC LIMIT 1');
        
        if(id > rows[0].id_producto){
            return res.status(404).json({msg: `El producto con id: ${id} no fue encontrado`});
        }

        await pool.query(`UPDATE producto SET descripcion = $2, precio = $3
                            WHERE id_producto = $1`, [id, descripcion, precio]);
        res.json({
            ok: true,
            msg: 'Producto actualizado',
            id
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'El producto no pudo ser actualizado'
        });
        console.log(error);
    }
}

export const actualizarProductoParcial = async(req = request, res= response) => {
    const {id} = req.params;
    const {descripcion, precio} = req.body;
    try {
        const {rows} = await pool.query('SELECT id_producto FROM producto ORDER BY id_producto DESC LIMIT 1');
        
        if(id > rows[0].id_producto){
            return res.status(404).json({msg: `El producto con id: ${id} no fue encontrado`});
        }

        await pool.query(`UPDATE producto SET descripcion = COALESCE($2, descripcion), precio = COALESCE($3,precio)
                            WHERE id_producto = $1`, [id, descripcion, precio]);
        res.json({
            ok: true,
            msg: 'Producto actualizado',
            id
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'El producto no pudo ser actualizado'
        });
        console.log(error);
    }
}

export const eliminarProducto = async(req = request, res= response) => {
    const {id} = req.params;
    let msg = ''
    try {
        const {rowCount} = await pool.query('DELETE FROM producto WHERE id_producto = $1', [id]);
        rowCount > 0 ? msg = 'El producto ha sido eliminado con exito': msg = 'El producto no existe'
        res.json({
            ok: true,
            msg,
            id
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'El producto no pudo ser eliminado'
        })
        console.log(error);
    }
}


