import {request, response } from "express"
import pool from '../connection.js';

export const obtenerVentas = async(req = request, res = response) => {
    try {
        const {rows} = await pool.query('SELECT * FROM venta ORDER BY id_venta');
        res.json({
            ok: true,
            msg: 'Se han obtenido las ventas',
            ventas: rows
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener las ventas'
        })
        console.log(error);
    }
}

export const crearVenta = async(req = request, res = response) => {
    const {cantidad, idProducto, idCliente} = req.body;
    try {
        await pool.query('INSERT INTO venta(cantidad, id_producto, id_cliente) VALUES($1, $2, $3)', 
                        [cantidad, idProducto, idCliente]);
        const {rows} = await pool.query('SELECT id_venta FROM venta ORDER BY id_venta DESC LIMIT 1')

        res.status(201).json({
            ok: true,
            msg: 'La venta ha sido creada con exito',
            id: rows[0].id_venta
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se pudo crear la venta'
        })
        console.log(error);
    }
}

export const actualizarVentaCompleto = async(req = request, res = response) => {
    const {id} = req.params;
    const {cantidad, idProducto, idCliente} = req.body;
    try {
        const {rows} = await pool.query('SELECT id_venta FROM venta ORDER BY id_venta DESC LIMIT 1')

        if(id > rows[0].id_venta || id < 0){
            return res.status(400).json({msg: `La venta con id: ${id} no fue encontrada`})
        }

        await pool.query(`UPDATE venta SET cantidad = $2, id_producto = $3, id_cliente = $4 
                        WHERE id_venta = $1`, [id, cantidad, idProducto, idCliente]);

        res.json({
            ok: true,
            msg: 'Venta actualizada',
            id
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se pudo actualizar la venta'
        })
        console.log(error);
    }
}

export const actualizarVentaParcial = async(req = request, res = response) => {
    const {id} = req.params;
    const {cantidad, idProducto, idCliente} = req.body;
    try {
        const {rows} = await pool.query('SELECT id_venta FROM venta ORDER BY id_venta DESC LIMIT 1')

        if(id > rows[0].id_venta || id < 0){
            return res.status(400).json({msg: `La venta con id: ${id} no fue encontrada`})
        }
        
        await pool.query(`UPDATE venta SET cantidad = COALESCE($2,cantidad), id_producto = COALESCE($3,id_producto),
                        id_cliente = COALESCE($4,id_cliente) WHERE id_venta = $1`, [id, cantidad, idProducto, idCliente]);

        res.json({
            ok: true,
            msg: 'Venta actualizada',
            id
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se pudo actualizar la venta'
        })
        console.log(error);
    }
}

export const eliminarVenta = async(req = request, res = response) => {
    const {id} = req.params;
    let msg = '';
    try {
        const {rowCount} = await pool.query('DELETE FROM venta WHERE id_venta = $1', [id]);
        rowCount > 0 ? msg = 'La venta ha sido eliminado con exito' : msg = 'La venta no existe';
        res.json({
            ok: true,
            msg,
            id
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se pudo eliminar la venta'
        })
        console.log(error);
    }
}

