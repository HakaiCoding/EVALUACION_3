<?php
session_start();

class Pagina {
    public $nombre;
    public $juegos;

    public function __construct($nombre, $juegos) {
        $this->nombre = $nombre;
        $this->juegos = $juegos;
    }

    public function mostrar() {
        echo "<h1>$this->nombre</h1>";
        echo "<ul>";
        foreach ($this->juegos as $juego) {
            echo "<li>$juego</li>";
        }
        echo "</ul>";
        echo '<form method="post">
                <input type="checkbox" name="guardar_categoria"> Guardar categoria
                <input type="submit" name="siguiente" value="Siguiente">
              </form>';
    }
}

//CONEXION A LA BBDD
$conn = mysqli_connect("localhost", "root", "", "juegos");


//ARRAY PAGINAS
$paginas = array();


//CONSULTA A LA BBDD TABLA ACCION
$sql = "SELECT * FROM accion";
$result = mysqli_query($conn, $sql);
$categoria = "Accion";
$juegosAccion = array();

while($row = mysqli_fetch_assoc($result)) {
     $juegosAccion[] = $row["nombre"];
}
$paginas[] = new Pagina($categoria, $juegosAccion);


//CONSULTA A LA BBDD TABLA DEPORTES
$sql = "SELECT * FROM deportes";
$result = mysqli_query($conn, $sql);
$categoria = "Deportes";
$juegosDeporte = array();

while($row = mysqli_fetch_assoc($result)) {
     $juegosDeporte[] = $row["nombre"];
}
$paginas[] = new Pagina($categoria, $juegosDeporte);


//CONSULTA A LA BBDD TABLA ESTRATEGIA
$sql = "SELECT * FROM estrategia";
$result = mysqli_query($conn, $sql);
$categoria = "Estrategia";
$juegosEstrategia = array();

while($row = mysqli_fetch_assoc($result)) {
     $juegosEstrategia[] = $row["nombre"];
}
$paginas[] = new Pagina($categoria, $juegosEstrategia);



// Si no existe la variable de sesion categorias_seleccionadas, la crea
if (!isset($_SESSION['categorias_seleccionadas'])) {
    $_SESSION['categorias_seleccionadas'] = array();
}

// Si se ha pulsado el boton siguiente y se ha marcado la casilla guardar categoria, guarda la categoria en la variable de sesion
if (isset($_POST['siguiente']) && isset($_POST['guardar_categoria'])) {
    $_SESSION['categorias_seleccionadas'][] = $paginas[$_SESSION['pagina_actual']]->nombre;
}

// Si existe la variable de sesion pagina_actual, la incrementa, si no, la crea y le asigna el valor 0
if (isset($_SESSION['pagina_actual'])) {
    $_SESSION['pagina_actual']++;
} else {
    $_SESSION['pagina_actual'] = 0;
}

// Si la pagina actual es menor que el numero de paginas, muestra la pagina actual, si no, muestra las categorias seleccionadas
if ($_SESSION['pagina_actual'] < count($paginas)) {
    $paginas[$_SESSION['pagina_actual']]->mostrar();
} else {
    echo '<h1>Categorias Seleccionadas</h1>';
    echo '<ul>';
    foreach ($_SESSION['categorias_seleccionadas'] as $categoria) {
        echo "<li>$categoria</li>";
    }
    echo '</ul>';
    
    // Destruye la sesion
    session_destroy();
    // Muestra un enlace para volver a empezar
    echo '<a href="index.php">Volver a empezar</a>';
}

mysqli_close($conn);
?>