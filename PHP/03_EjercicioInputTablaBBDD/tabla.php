<?php
  session_start();
  $nombreTabla = $_GET["id"];

  $user = "root";
  $pass = "";
  $bbdd = "hacking";
  $server = "localhost";
  $conexion = mysqli_connect($server, $user, $pass, $bbdd);

  // Consulta a la BBDD hacking
  $sql = "SELECT * FROM $nombreTabla";

  try{
    $result = mysqli_query($conexion, $sql);
    echo "Contenido de la tabla " . $nombreTabla . ":<br><br>";
    
    foreach ($result as $fila) {
      echo implode(" - ", $fila) . "<br>";
    }

    mysqli_close($conexion);
  }

  catch(Exception $e){
    echo "La tabla '$nombreTabla' no existe en la base de datos '$bbdd'";}
    echo "<br><a href='index.php'>Volver</a>";
?>