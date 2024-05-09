CREATE TABLE cliente(
    id_cliente SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(15) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    ciudad VARCHAR(15) NOT NULL
);

INSERT INTO cliente (nombre, direccion, telefono, ciudad) VALUES
    ('Juan Perez', 'Calle 123', '123456789', 'Medellin'),
    ('Maria Lopez', 'Avenida 456', '987654321', 'Bogota'),
    ('Pedro Rodriguez', 'Calle 12', '456123789', 'Cali'),
    ('Luisa Martinez', 'Carrera 789', '789456123', 'Medellin'),
    ('Carlos Sanchez', 'Calle 456', '159753468', 'Bogota'),
    ('Ana Ramirez', 'Avenida 789', '357159246', 'Cali'),
    ('Miguel Torres', 'Calle Central', '258369147', 'Medellin'),
    ('Laura Gomez', 'Carrera 123', '147258369', 'Bogota'),
    ('Daniel Cruz', 'Calle 12', '369147258', 'Cali'),
    ('Sofia Herrera', 'Avenida 12', '951753852', 'Medellin');
