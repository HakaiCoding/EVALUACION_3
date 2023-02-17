<?php
session_start();

// DB connection
$servername = "localhost";
$username = "root";
$password = "";
$bbdd = "restaurante";
$conn = new mysqli($servername, $username, $password, $bbdd);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Verificamos si se ha enviado el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validamos los datos de entrada para evitar inyección SQL
    $user = htmlspecialchars($_POST["user"]);
    $pass = htmlspecialchars($_POST["pass"]);
    
    // Consulta para verificar si el usuario y la contraseña son correctos en la BBDD usando prepared statements para evitar inyección SQL
    $sql = "SELECT * FROM credenciales WHERE BINARY user = BINARY ? AND BINARY pass = BINARY ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $user, $pass);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Si los datos son correctos, creamos la sesión y redirigimos al usuario a la página de la carta
        $_SESSION["user"] = $user;
        header("Location: carta.php");
        exit();
    } else {
        // Si los datos son incorrectos, mostramos un mensaje de error genérico
        $error = "Usuario o contraseña incorrectos";
    }

    // Cerrar el prepared statement
    $stmt->close();
}

// Cerrar la conexión a la BBDD
$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Restaurante</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form method="POST">
        <label for="user">Usuario:</label>
        <input type="text" id="user" name="user" required>
        <br>
        <label for="pass">Contraseña:</label>
        <input type="password" id="pass" name="pass" required>
        <br>
        <input type="submit" value="ACCEDER">
    </form>

    <?php if (isset($error)): ?>
        <p>Error al iniciar sesión.</p>
    <?php endif; ?>
</body>
</html>