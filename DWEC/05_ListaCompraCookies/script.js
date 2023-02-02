//Array alimentos
let alimentos = new Array();

//Añadir evento click al botón "Añadir", para añadir un nuevo alimento a la lista y al array "alimentos" usando cookies
document.getElementById("addItem").addEventListener("click", function () {
    let li = document.createElement("li");
    let liText = document.createTextNode(document.getElementById("inputItem").value);
    li.appendChild(liText);
    document.getElementById("listItem").appendChild(li);
    alimentos.push(document.getElementById("inputItem").value);
    document.cookie = "alimentos=" + alimentos;

    li.addEventListener("dblclick", function () {
        li.remove();
        alimentos.splice(i, 1);
        document.cookie = "alimentos=" + alimentos;
    });
});

//Recorrer array "alimentos" y crear elementos <li> con el nombre de cada alimento usando cookies
for (let i = 0; i < alimentos.length; i++) {
    let li = document.createElement("li");
    let liText = document.createTextNode(alimentos[i]);
    li.appendChild(liText);
    document.getElementById("listItem").appendChild(li);

    //Añadir evento dbclick a cada elemento <li> para eliminarlo de la lista y del array "alimentos"
    li.addEventListener("dblclick", function () {
        li.remove();
        alimentos.splice(i, 1);
        document.cookie = "alimentos=" + alimentos;
    });
}

//Añadir evento click al botón "clearList" para eliminar todos los elementos de la lista, del array "alimentos" y de las cookies
document.getElementById("clearList").addEventListener("click", function () {
    document.getElementById("listItem").innerHTML = "";
    alimentos = [];
    document.cookie = "alimentos=" + alimentos;
});



