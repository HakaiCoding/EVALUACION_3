<?php
  session_start();
  if (isset($_POST["nombreTabla"])) {
    $_SESSION["nombreTabla"] = $_POST["nombreTabla"];
    header("Location: tabla.php?id=".$_POST['nombreTabla']);
    exit;
  }
?>

<form action="" method="post">
  Nombre de la tabla: <input type="text" name="nombreTabla"><br>
  <a href="#" onclick="document.forms[0].submit();">Mostrar tabla</a>
</form>