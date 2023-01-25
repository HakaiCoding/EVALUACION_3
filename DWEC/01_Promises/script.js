//Valor del input determina cuantas veces se ejecuta el código
let numberInput = document.getElementById("numero");
let button = document.getElementById("button");

button.addEventListener("click", function (event) {
    event.preventDefault();
    if (numberInput.value === 0) {
        alert("El número no puede ser 0");
    }
    else {
        for (let i = 0; i < numberInput.value; i++) {
            let randomNumberPromise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    let randomNumber = Math.floor(Math.random() * 12) + 1;
                    if (randomNumber >= 5) {
                        resolve(randomNumber);
                    } else {
                        reject(new Error("El número es menor que 5"));
                    }
                }, 5000);
            });

            randomNumberPromise
                .then(function (number) { console.log("Ha salido un número correcto: " + number); })
                .catch(function (error) { console.log(error.message); });
        }
    }
});



//Valor del prompt determina cuantas veces se ejecuta el código

// repeatNumber = prompt("¿Cuántas veces quieres que se ejecute el código?");

// for (let i = 0; i < numberInput.value; i++) {
//     let randomNumberPromise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             let randomNumber = Math.floor(Math.random() * 12) + 1;
//             if (randomNumber >= 5) {
//                 resolve(randomNumber);
//             } else {
//                 reject(new Error("El número es menor que 5"));
//             }
//         }, 5000);
//     });

//     randomNumberPromise
//         .then(function (number) { console.log("Ha salido un número correcto: " + number); })
//         .catch(function (error) { console.log(error.message); });
// }
