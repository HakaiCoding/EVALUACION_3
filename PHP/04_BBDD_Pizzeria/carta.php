<!-- Greeting message showing the user name saved in $_SESSION['user'] -->
<?php

session_start();

if (isset($_SESSION["user"])) {
    print "<h2>¡Bienvenido, " . $_SESSION["user"] . "!</h2><br>";
    print "<h3>A continuación se muestra la carta del restaurante:</h3><br>";

    // Connect to the database
    $user = "root";
    $pass = "";
    $bbdd = "restaurante";
    $server = "localhost";
    $conexion = mysqli_connect($server, $user, $pass, $bbdd);

    // SQL query to get the content of the table 'comidas'
    $sql = "SELECT * FROM comidas";
    $result = mysqli_query($conexion, $sql);

    // Print a table with the content of the table 'comidas'
    print "<table border='2'>";
    print "<tr><th>Nombre</th><th>Stock</th><th>Precio/Ud (€)</th><th>¿Cuant@s quieres?</tr>";
    while ($row = mysqli_fetch_array($result)) {
        print "<tr>
        <td>" . $row["Nombre"] . "</td>
        <td>" . $row["Stock"] . "</td>
        <td>" . $row["Precio"] . "</td> 
        <td><input type='number' name='cantidad' min='0' max='" . $row["Stock"] . "'></td>
        <td><input type='submit' value='Añadir al carrito'></td>
        . </tr>";
    }
    print "</table>";

    // Create an array called 'carrito' to store the products that the user wants to buy
    if (!isset($_SESSION["carrito"])) {
        $_SESSION["carrito"] = array();
    }





}
?>