CREATE TABLE producto(
    id_producto SERIAL PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL, 
    precio NUMERIC(6,2) NOT NULL CHECK(precio >= 0)
);

INSERT INTO producto (descripcion, precio) VALUES
    ('Camisa', 20.50),
    ('Pantalón', 35.75),
    ('Zapatos', 50.00),
    ('Gorra', 15.99),
    ('Bufanda', 10.25),
    ('Chaqueta', 65.50),
    ('Vestido', 40.00),
    ('Traje', 80.25),
    ('Blusa', 25.75),
    ('Shorts', 30.99);
