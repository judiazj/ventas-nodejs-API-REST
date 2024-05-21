CREATE TABLE producto(
    id_producto SERIAL PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL, 
    precio NUMERIC(8) NOT NULL CHECK(precio >= 0)
);

INSERT INTO producto VALUES(1,'Coca-Cola 2L',2400),
    (2,'Doritos',1000),
    (3,'Salchicha',3600),
    (4,'Pan',500),
    (5,'Queso',1000),
    (6,'Sandia',8000),
    (7,'Leche 1L',4563),
    (8,'Atun',1800),
    (9,'Pescado',7856),
    (10,'Cicla Estatica',1800),
    (11,'Camiseta',12000),
    (12,'Blue-Jean',7800),
    (13,'Papaya',1400),
    (14,'Agua en Bolsa',1800),
    (15,'Red Bull',1200);