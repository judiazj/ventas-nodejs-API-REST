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

export const crearVenta = (req = request, res = response) => {

}

export const actualizarVentaCompleto = (req = request, res = response) => {

}

export const actualizarVentaParcial = (req = request, res = response) => {

}

export const eliminarVenta = (req = request, res = response) => {

}

