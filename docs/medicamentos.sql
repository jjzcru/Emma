-- ENUM pendiente, tomada
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL UNIQUE,
    password_hash CHAR(64) NOT NULL, -- Guardamos el hash de la contraseña para no guardar las credenciales en texto plano en caso de hackeo
    tipo ENUM('paciente', 'doctor') NOT NULL DEFAULT 'doctor',
    nombre VARCHAR(100) NOT NULL,
    edad INT NOT NULL
);

CREATE TABLE Medicamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(100) NOT NULL,
    dosis varchar(50) NOT NULL
);

CREATE TABLE Registros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    medicamento_id INT NOT NULL,
    -- This is a valid comment
    fecha_hora TIMESTAMP DEFAULT NULL,
    estado ENUM('pendiente', 'tomada') NOT NULL DEFAULT 'pendiente',
    -- References significa que la clave foranea esta siendo cogida de cierto dato con cierto nombre en otra tabla
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (medicamento_id) REFERENCES Medicamentos(id)
);


-- Query para insertar
INSERT INTO Usuarios (usuario, password_hash, tipo, nombre, edad)
    VALUES ('test', SHA2('test_test', 256), 'doctores', 'Juan Perez', 30)

SELECT * FROM Usuarios WHERE usuario = 'test' AND password_hash = SHA2('test_test', 256);


DROP TABLE Registros;
DROP TABLE Medicamentos;
DROP TABLE tablUsuariose_name;
