CREATE TABLE cliente(
    id_cliente SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(15) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    ciudad VARCHAR(15) NOT NULL
);

INSERT INTO cliente VALUES(123,'Simon Bolivar', 'Kra11#9-56', '7702291', 'Cali'),
        (456,'Mark Zuckerberg', 'Cll 21#95-52', '+57-315291', 'Medellin'),
        (789,'Drew Barrymore', 'Kra52#65-05', '3125359456', 'Cali'),
        (741,'Larry Page', 'Cll 05#52-95', '7872296', 'Tunja'),
        (147,'Tom Delonge', 'Cll 52#65-56', '7992293', 'Medellin'),
        (852,'Simon Bolivar', 'Kra 21#65-52', '982295', 'Bogota'),
        (258,'Mark Hoppus', 'Cll 11#95-9', '8952294', 'Bogota'),
        (963,'Britney Spears', 'Cll 05#52-56', '7705295', 'Tunja'),
        (369,'John Forbes Nash', 'Kra 21#05-56', '776622966', 'Cali'),
        (159,'Tom Delonge', 'Kra05#65-05', '6702293','Medellin'),
        (753,'Sergey Brin', 'Cll 11#65-11', '9702299', 'Medellin'),
        (153,'Emma Watson', 'Kra 9#9-95', '31569638', 'Tunja');