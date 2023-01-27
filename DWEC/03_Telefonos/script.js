// Ejercicio promesas

// Creamos dos arrays (usuarios y números)
// Se desea realizar un programa que permita comprobar si un identificador determinado
// existe en el array de usuarios y, si es así, se comprueba si ese mismo identificador existe
// en el array de números, visualizando entonces un literal que indique que el identificador
// existe en los dos arrays. También puede ocurrir que el usuario no tenga número registrado,
// se visualiza entonces el mensaje “El usuario no tiene número de teléfono”.
// Si el identificador no existe en usuarios, se muestra un mensaje informando de ello y finaliza
// el programa, no se comprueba si el identificador no existe en números.
// Resolver mediante el uso de dos promesas, una comprueba la existencia del identificador
// en el primer array y de no ser así, visualiza un mensaje de error. La otra, la existencia del
// identificador en el segundo. La segunda promesa sólo se ejecuta en el caso de que la
// primera se haya resuelto correctamente.


// Array de usuarios
let usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Pedro" },
    { id: 3, nombre: "Marta" }
];

// Array de números
let numeros = [
    { id: 1, num: "123454562" },
    { id: 2, num: "255555555" },
    { id: 3, num: "355555555" }
];


// Obtenemos el elemento del DOM
idInput = document.getElementById("idNumber");



// CON PROMESAS (FUNCIONES NORMALES)
idInput.addEventListener("change", function () {
    let id = idInput.value;
    let promise1 = new Promise(function (resolve, reject) {
        let user = usuarios.find(function (u) { return u.id == id; });
        if (user) {
            resolve(user);
        } else {
            reject("El usuario no existe");
        }
    });
    promise1
        .then(function (user) {
            let promise2 = new Promise(function (resolve, reject) {
                let num = numeros.find(function (n) { return n.id == id; });
                if (num) {
                    resolve(num);
                } else {
                    reject("El usuario no tiene número de teléfono");
                }
            });
            promise2
                .then(function (num) {
                    alert(`El usuario ${user.nombre} tiene el número ${num.num}`);
                })
                .catch(function (err) {
                    alert(err);
                });
        })
        .catch(function (err) {
            alert(err);
        });
});


// CON PROMESAS (FUNCIONES FLECHA)
// idInput.addEventListener("change", () => {
//     let id = idInput.value;
//     let promise1 = new Promise((resolve, reject) => {
//         let user = usuarios.find((u) => u.id == id);
//         if (user) {
//             resolve(user);
//         } else {
//             reject("El usuario no existe");
//         }
//     });
//     promise1
//         .then((user) => {
//             let promise2 = new Promise((resolve, reject) => {
//                 let num = numeros.find((n) => n.id == id);
//                 if (num) {
//                     resolve(num);
//                 } else {
//                     reject("El usuario no tiene número de teléfono");
//                 }
//             });
//             promise2
//                 .then((num) => {
//                     alert(`El usuario ${user.nombre} tiene el número ${num.num}`);
//                 })
//                 .catch((err) => {
//                     alert(err);
//                 });
//         })
//         .catch((err) => {
//             alert(err);
//         });
// });


//SIN PROMESAS
// idInput.addEventListener("change", function(){
//     let id = idInput.value;
//     let user = usuarios.find(user => user.id == id);
//     let number = numeros.find(number => number.id == id);
//     if (user){
//         if (number){
//             alert("El usuario " + user.nombre + " tiene el número " + number.num);
//         } else {
//             alert("El usuario " + user.nombre + " no tiene número de teléfono");
//         }
//     } else {
//         alert("El usuario no existe");
//     }
// });