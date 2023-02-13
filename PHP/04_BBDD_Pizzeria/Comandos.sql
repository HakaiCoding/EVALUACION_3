CREATE DATABASE restaurante;

USE restaurante;

//Tabla CLIENTES
CREATE TABLE clientes (
  DNI VARCHAR(9) PRIMARY KEY,
  Nombre VARCHAR(50) NOT NULL,
  Telefono VARCHAR(20)
);

//Tabla CREDENCIALES
CREATE TABLE credenciales (
  DNI VARCHAR(9) PRIMARY KEY,
  User VARCHAR(10) UNIQUE NOT NULL,
  Pass VARCHAR(20) NOT NULL,
  FOREIGN KEY (DNI) REFERENCES clientes(DNI)
);

//TABLA PEDIDOS
CREATE TABLE pedidos (
  idPedido INT PRIMARY KEY AUTO_INCREMENT,
  DNI VARCHAR(9) NOT NULL,
  Fecha DATE NOT NULL,
  Precio FLOAT NOT NULL,
  FOREIGN KEY (DNI) REFERENCES clientes(DNI)
);

//TABLA COMIDAS
CREATE TABLE comidas (
  idComida INT PRIMARY KEY AUTO_INCREMENT,
  Nombre VARCHAR(50) NOT NULL,
  Stock INT NOT NULL,
  Precio FLOAT NOT NULL
);

//TABLA INGREDIENTES
CREATE TABLE ingredientes (
  idIngrediente INT PRIMARY KEY AUTO_INCREMENT,
  Nombre VARCHAR(50) NOT NULL,
  Calorias INT NOT NULL
);

//TABLA ALERGENOS
CREATE TABLE alergenos (
  idAlergeno INT PRIMARY KEY AUTO_INCREMENT,
  Nombre VARCHAR(50) NOT NULL,
  Icono VARCHAR(50) NOT NULL
);

//TABLA PEDIDOS_COMIDAS
CREATE TABLE pedidos_comidas (
  idPedido INT NOT NULL,
  idComida INT NOT NULL,
  Cantidad INT NOT NULL,
  FOREIGN KEY (idPedido) REFERENCES pedidos(idPedido),
  FOREIGN KEY (idComida) REFERENCES comidas(idComida),
  PRIMARY KEY (idPedido, idComida)
);

//TABLA COMIDAS_INGREDIENTES
CREATE TABLE comidas_ingredientes (
  idComida INT NOT NULL,
  idIngrediente INT NOT NULL,
  Cantidad INT NOT NULL,
  FOREIGN KEY (idComida) REFERENCES comidas(idComida),
  FOREIGN KEY (idIngrediente) REFERENCES ingredientes(idIngrediente),
  PRIMARY KEY (idComida, idIngrediente)
);

//TABLA ALERGENOS_INGREDIENTES
CREATE TABLE alergenos_ingredientes (
  idAlergeno INT NOT NULL,
  idIngrediente INT NOT NULL,
  FOREIGN KEY (idAlergeno) REFERENCES alergenos(idAlergeno),
  FOREIGN KEY (idIngrediente) REFERENCES ingredientes(idIngrediente),
  PRIMARY KEY (idAlergeno, idIngrediente)
);


