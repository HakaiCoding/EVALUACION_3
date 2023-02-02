// Función para obtener el valor de una cookie dado su nombre
function getCookie(cname) {
    // Concatena el nombre de la cookie con el símbolo "="
    let name = cname + "=";
    // Decodifica el valor de la cookie
    let decodedCookie = decodeURIComponent(document.cookie);
    // Divide el string de cookies en un array separado por ";"
    let cookiesArray = decodedCookie.split(';');
    // Recorre el array de cookies
    for (let i = 0; i < cookiesArray.length; i++) {
        let c = cookiesArray[i];
        // Elimina los espacios en blanco al principio de la cookie
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        // Comprueba si el nombre de la cookie es igual al nombre especificado
        if (c.indexOf(name) == 0) {
            // Devuelve el valor de la cookie
            return c.substring(name.length, c.length);
        }
    }
    // Si la cookie no existe, devuelve una cadena vacía
    return "";
}

// Función para pedir permiso al usuario para utilizar cookies
function askPermission() {
    // Muestra un cuadro de diálogo para confirmar si el usuario permite el uso de cookies
    let acceptCookies = confirm("¿Permitir el uso de cookies para contar las visitas?");
    // Si el usuario permite el uso de cookies
    if (acceptCookies) {
        // Obtiene el valor de la cookie "visits"
        let visits = getCookie("visits");
        // Si la cookie no existe
        if (visits == "") {
            // Establece el contador de visitas en 0 
            visits = 0;
        }
        // Aumenta el contador de visitas en 1
        visits++;
        // Crea una nueva fecha
        let expires = new Date();
        // Aumenta la fecha en un año en milisegundos
        expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
        // Crea una nueva cookie con el nombre "visits" y la fecha de expiración
        document.cookie = "visits=" + visits + "; expires=" + expires.toGMTString();
        // Muestra el número de visitas en el body de la página
        document.body.innerHTML = "Número de visitas: " + visits;

    // Si el usuario no permite el uso de cookies
    } else {
        // Elimina la cookie "visits"
        document.cookie = "visits=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
        // Muestra un mensaje indicando que las cookies no están permitidas
        document.body.innerHTML = "Cookies no permitidas.";
    }
}

// Llama a la función para pedir permiso al usuario
askPermission();
