<?php
session_start();
?>

 <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <label for="user">Usuario:</label>
    <input type="text" id="user" name="user">
    <br>
    <label for="pass">Contraseña:</label>
    <input type="password" id="pass" name="pass">
    <br>
    <input type="submit" value="Log in">
</form>

<?php

// Comprobamos si se ha enviado el formulario
if (isset($_POST["user"]) && isset($_POST["pass"])) {
    $user = $_POST["user"];
    $pass = $_POST["pass"];

    // Connect to the database
    $user = "root";
    $pass = "";
    $bbdd = "restaurante";
    $server = "localhost";
    $conexion = mysqli_connect($server, $user, $pass, $bbdd);

    // Check if the user and password exist in the same row
    $sql = "SELECT * FROM credenciales WHERE user = '" . $_POST["user"] . "' AND pass = '" . $_POST["pass"] . "'";
    $result = mysqli_query($conexion, $sql);

    // If the user and password exist, we create a session
    if (mysqli_num_rows($result) > 0) {
        $_SESSION["user"] = $_POST["user"];
        header("Location: carta.php");
    } else {
        echo "Usuario o contraseña incorrectos";
    }

    mysqli_close($conexion);
}

?>