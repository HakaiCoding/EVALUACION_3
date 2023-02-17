<?php

session_start();

if (isset($_SESSION["user"]) && isset($_SESSION["contenidoCarrito"])) {

    // DB connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $bbdd = "restaurante";
    $conn = new mysqli($servername, $username, $password, $bbdd);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Display cart content
    if(!empty($_SESSION['contenidoCarrito'])){
        print "<h3>Contenido del carrito:</h3>";
        print "<table border='2'>";
        print "<tr><th>Nombre</th><th>Precio/Ud (€)</th><th>Cantidad</th><th>Subtotal</th><th>Acciones</th></tr>";
        $total = 0;
        foreach($_SESSION['contenidoCarrito'] as $key => $item){
            print "<tr>
            <td>" . $item[0] . "</td>
            <td>" . $item[1] . "</td>
            <td>" . $item[2] . "</td>
            <td>" . ($item[1] * $item[2]) . "</td>
            <td>
                <form method='post'>
                    <input type='hidden' name='key' value='" . $key . "'>
                    <input type='submit' name='eliminar_del_carrito' value='Eliminar del carrito'>
                </form>
            </td>
            </tr>";
            $total += ($item[1] * $item[2]);
        }
        print "<tr><td colspan='3'><b>Total a pagar:</b></td><td><b>" . $total . "</b></td><td>
        <form method='post'>
            <input type='submit' name='tramitar_pedido' value='Tramitar pedido'>
        </form>
        </td></tr>";
        print "</table><br>";
        print "<form action='carta.php'>
                    <input type='submit' value='Volver a la carta'>
                </form>";
    }

    // Delete item from cart
    if(isset($_POST['eliminar_del_carrito'])){
        $key = $_POST['key'];
        unset($_SESSION['contenidoCarrito'][$key]);
    }

    // Process order
    if(isset($_POST['tramitar_pedido'])){

        //sql query to get the value of the field "DNI" from the table "clientes" where the value of the field "Nombre" is equal to the value of the variable "$_SESSION['user']"
        $getDNI = "SELECT DNI FROM clientes WHERE Nombre = '" . $_SESSION['user'] . "'";

        //save the result of the query in the variable "$dni"
        $dni = $conn->query($getDNI);

        //save the value of the field "DNI" in the variable "$dni"
        $dni = $dni->fetch_assoc()['DNI'];

        //save the current date in the variable "$fecha"
        $fecha = date("Y-m-d H:i:s");

        //save the value of the variable "$total" in the variable "$precio"
        $precio = $total;


        $sql = "INSERT INTO pedidos (DNI, Fecha, Precio) VALUES ('$dni', '$fecha', '$precio')";

        if ($conn->query($sql) === TRUE) {
            echo "Pedido tramitado correctamente";
            $_SESSION['contenidoCarrito'] = array();
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    // Cerrar la conexión a la BBDD
    $conn->close();

} else {
    header("Location: login.php");
    exit();
}

?>