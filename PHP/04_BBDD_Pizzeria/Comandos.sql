CREATE DATABASE restaurante;

USE restaurante;

--TABLAS--
CREATE TABLE clientes (
  DNI VARCHAR(9) PRIMARY KEY,
  Nombre VARCHAR(50) NOT NULL,
  Telefono VARCHAR(9)
);


CREATE TABLE credenciales (
  DNI VARCHAR(9) PRIMARY KEY,
  User VARCHAR(10) UNIQUE NOT NULL,
  Pass VARCHAR(20) NOT NULL,
  FOREIGN KEY (DNI) REFERENCES clientes(DNI)
);


CREATE TABLE pedidos (
  idPedido INT PRIMARY KEY AUTO_INCREMENT,
  DNI VARCHAR(9) NOT NULL,
  Fecha DATE NOT NULL,
  Precio FLOAT NOT NULL,
  FOREIGN KEY (DNI) REFERENCES clientes(DNI)
);


CREATE TABLE comidas (
  idComida INT PRIMARY KEY AUTO_INCREMENT,
  Nombre VARCHAR(50) NOT NULL,
  Stock INT NOT NULL,
  Precio FLOAT NOT NULL
);


CREATE TABLE ingredientes (
  idIngrediente INT PRIMARY KEY AUTO_INCREMENT,
  Nombre VARCHAR(50) NOT NULL,
  Calorias INT NOT NULL
);



CREATE TABLE pedidos_comidas (
  idPedido INT NOT NULL,
  idComida INT NOT NULL,
  Cantidad INT NOT NULL,
  FOREIGN KEY (idPedido) REFERENCES pedidos(idPedido),
  FOREIGN KEY (idComida) REFERENCES comidas(idComida),
  PRIMARY KEY (idPedido, idComida)
);


CREATE TABLE comidas_ingredientes (
  idComida INT NOT NULL,
  idIngrediente INT NOT NULL,
  Cantidad INT NOT NULL,
  FOREIGN KEY (idComida) REFERENCES comidas(idComida),
  FOREIGN KEY (idIngrediente) REFERENCES ingredientes(idIngrediente),
  PRIMARY KEY (idComida, idIngrediente)
);

--INSERTS--
INSERT INTO clientes (DNI, Nombre, Telefono) VALUES
("11111111A", "Victor", "111111111"),
("22222222B", "Alberto", "222222222"),
("33333333C", "Moleiro", "333333333");


INSERT INTO credenciales (DNI, User, Pass) VALUES
("11111111A", "victor", "victor"),
("22222222B", "alberto", "alberto"),
("33333333C", "moleiro", "moleiro")

INSERT INTO comidas (Nombre, Stock, Precio) VALUES
("Pizza", 10, 10),
("Hamburguesa", 10, 8),
("Kebab", 10, 6),
("Ensalada", 10, 4);


INSERT INTO ingredientes (Nombre, Calorias) VALUES
("Tomate", 20),
("Queso", 30),
("Carne", 40),
("Lechuga", 10),
("Pan", 50),
("Salsa", 20),
("Patatas", 30),
("Cebolla", 10);

INSERT INTO comidas_ingredientes (idComida, idIngrediente, Cantidad) VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(1, 5, 1),
(1, 6, 1),
(1, 8, 1),
(2, 1, 1),
(2, 2, 1),
(2, 3, 1),
(2, 4, 1),
(2, 5, 1),
(2, 6, 1),
(2, 7, 1),
(2, 8, 1),
(3, 1, 1),
(3, 3, 1),
(3, 4, 1),
(3, 5, 1),
(4, 1, 1),
(4, 2, 1),
(4, 4, 1),
(4, 6, 1),
(4, 8, 1);