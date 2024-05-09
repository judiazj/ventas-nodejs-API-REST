CREATE TABLE venta(
    id_venta SERIAL PRIMARY KEY,
    cantidad INT NOT NULL CHECK(cantidad > 0),
    id_producto INT NOT NULL REFERENCES producto,
    id_cliente INT NOT NULL REFERENCES cliente       
);

INSERT INTO venta (cantidad, id_producto, id_cliente) VALUES
    (3, 1, 1),
    (2, 2, 2),
    (1, 3, 3),
    (4, 4, 4),
    (2, 5, 5),
    (3, 6, 6),
    (1, 7, 7),
    (2, 8, 8),
    (3, 9, 9),
    (4, 10, 10);
