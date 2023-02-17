<?php
session_start();

if (isset($_SESSION["user"])) {
    print "<h2>¡Bienvenido, " . $_SESSION["user"] . "!</h2>";
    print "<form method='post'>
                <input type='submit' name='ver_carrito' value='Ver Carrito'>
                <input type='submit' name='cerrar_sesion' value='Cerrar Sesión'>
            </form>";

    // DB connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $bbdd = "restaurante";
    $conn = new mysqli($servername, $username, $password, $bbdd);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Consulta SQL para obtener el contenido de la tabla 'comidas'
    $sql = "SELECT * FROM comidas";
    $result = mysqli_query($conn, $sql);

    // Imprimir una tabla con el contenido de la tabla 'comidas'
    print "<table border='2'>";
    print "<tr><th>Nombre</th><th>Stock</th><th>Precio/Ud (€)</th><th>¿Cuánt@s quieres?</th><th>Añadir al carrito</th></tr>";
    while ($row = mysqli_fetch_array($result)) {
        print "<tr>
        <td>" . $row["Nombre"] . "</td>
        <td>" . $row["Stock"] . "</td>
        <td>" . $row["Precio"] . "</td> 
        <td>
            <form method='post'>
                <input type='number' name='cantidad' min='0' max='" . $row["Stock"] . "'>
            </td>
            <td>
                <input type='hidden' name='name' value='" . $row["Nombre"] . "'>
                <input type='hidden' name='price' value='" . $row["Precio"] . "'>
                <input type='submit' name='add_to_cart' value='Añadir'>
            </form>
        </td>
        </tr>";
    }
    print "</table>";

    // Add selected items to cart
    if (isset($_POST['add_to_cart'])) {
        $name = $_POST['name'];
        $price = $_POST['price'];
        $cantidad = $_POST['cantidad'];

        if ($cantidad > 0) {
            $itemArray = array($name, $price, $cantidad);
            if (!empty($_SESSION['contenidoCarrito'])) {
                $itemFound = false;
                foreach ($_SESSION['contenidoCarrito'] as $key => $item) {
                    if ($item[0] == $name) {
                        $_SESSION['contenidoCarrito'][$key][2] += $cantidad;
                        $itemFound = true;
                        break;
                    }
                }

                if (!$itemFound) {
                    $_SESSION['contenidoCarrito'][] = $itemArray;
                }

            } else {
            $_SESSION['contenidoCarrito'][] = $itemArray;
            }
        }
    }


    // Comprobar si se hizo clic en el botón 'ver_carrito'
    if(isset($_POST['ver_carrito'])){
        header("Location: carrito.php");
        exit();
    }

    // Comprobar si se hizo clic en el botón 'cerrar_sesion'
    if(isset($_POST['cerrar_sesion'])){
        session_unset();
        session_destroy();
        header("Location: login.php");
        exit();
    }

    // Cerrar la conexión a la BBDD
    $conn->close();
    
} else {
    header("Location: login.php");
    exit();
}
?>