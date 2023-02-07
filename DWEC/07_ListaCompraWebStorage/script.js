let alimentos = new Array();

// Comprobamos si hay datos en el local storage
if (localStorage.getItem("alimentos")) {
    // Si hay datos, los recuperamos y los convertimos a un array
    alimentos = JSON.parse(localStorage.getItem("alimentos"));
}

// Añadimos evento click al botón "addItem"
document.getElementById("addItem").addEventListener("click", function () {
    let li = document.createElement("li");
    let liText = document.createTextNode(document.getElementById("inputItem").value);
    li.appendChild(liText);
    document.getElementById("listItem").appendChild(li);
    alimentos.push(document.getElementById("inputItem").value);
    // Guardamos/Actualizamos el array en el local storage
    localStorage.setItem("alimentos", JSON.stringify(alimentos));
});

// For Loop que recorre el array de alimentos
for (let i = 0; i < alimentos.length; i++) {
    let li = document.createElement("li");
    li.textContent = alimentos[i];
    document.getElementById("listItem").appendChild(li);

    // Añadimos evento doble click a cada elemento de la lista
    li.addEventListener("dblclick", function () {
        li.remove();
        alimentos.splice(i, 1);
        // Guardamos/Actualizamos el array en el local storage
        localStorage.setItem("alimentos", JSON.stringify(alimentos));
    });
}


// Añadimos evento click al botón "clearList"
document.getElementById("clearList").addEventListener("click", function () {
    document.getElementById("listItem").innerHTML = "";
    alimentos = [];
    // Eliminamos el array del local storage
    localStorage.removeItem("alimentos");
});