let main = document.querySelector("main");

// Indica cuántos usuarios aleatorios se desean obtener.
let results = 10;

// Array para almacenar los usuarios
let users = [];

// Función para obtener los usuarios aleatorios
function getRandomUsers() {
    const url = `https://randomuser.me/api/?results=${results}`;
    main.innerHTML = 'Cargando datos...';
    fetch(url)
        .then((resp) => resp.json())
        .then(data => {
            users = data.results;
            showUsers();
        })
        .catch(error => {
            main.innerHTML = `<p class='error'>${error}</p>`;
        });
}


// Función para mostrar los usuarios en la página 
function showUsers() {
    main.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        let usuario = users[i];
        let div = document.createElement("div");
        div.classList.add("card");
        // Agregar la clase par o impar dependiendo del índice
        if (i % 2 == 0) {
            div.classList.add("impar");
        } else {
            div.classList.add("par");
        }
        let foto = usuario.picture.large;
        let mail = usuario.email;
        let nombre = usuario.name.first;
        // Agregar el HTML del usuario al div
        div.innerHTML = `<figure>` +
            `<img src='${foto}' alt='foto'>` +
            `<figure>` +
            `<p>${nombre}</p>` +
            `<p>Email: ${mail} </p>` +
            `<button id="cambiar-${i}" onclick="changeUser(${i})">Cambiar</button>`;
        main.appendChild(div);
    }
}

// Función para cambiar el usuario por uno nuevo
function changeUser(index) {
    // Obtener el div del usuario a cambiar
    const usuarioDiv = document.querySelectorAll(".card")[index];
    // Mostrar mensaje de cargando datos mientras se obtienen los nuevos datos
    usuarioDiv.innerHTML = `<div>Cargando información del nuevo usuario...</div>`;
    const url = `https://randomuser.me/api/`;
    fetch(url)
        .then((resp) => resp.json())
        .then(data => {
            // Reemplazar el usuario en el array de usuarios y mostrarlos
            users[index] = data.results[0];
            showUsers();
        })
        .catch(error => {
            main.innerHTML = `<p class='error'>${error}</p>`;
        });
}

// Obtener los usuarios aleatorios al cargar la página
getRandomUsers();
