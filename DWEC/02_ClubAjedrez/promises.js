let socios = [
    { nombre: 'Marta', edad: 15, nivel: 'C', ciudad: 'Villalba' },
    { nombre: 'Max', edad: 32, nivel: 'B', ciudad: 'Alpedrete' },
    { nombre: 'Julián', edad: 9, nivel: 'D', ciudad: 'Alpedrete' },
    { nombre: 'Amadeo', edad: 16, nivel: 'A', ciudad: 'Villalba' }
];

let nombreSocio = document.getElementById("nombreSocio");
let nivelSocio = "";
let ciudadSocio = "";

//Función que comprueba si el socio existe
let checkSocio = (nombre) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < socios.length; i++) {
            if (socios[i].nombre === nombre) {
                nivelSocio = socios[i].nivel;
                ciudadSocio = socios[i].ciudad;
                resolve(true);
            }
        }
        reject(false);
    });
}

nombreSocio.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkSocio(nombreSocio.value)
            .then((result) => {
                //Crear div
                let div = document.createElement("div");

                //Crear h1
                let h1 = document.createElement("h1");
                let textoH1 = document.createTextNode("El socio " + nombreSocio.value + " existe");
                h1.appendChild(textoH1);
                div.appendChild(h1);

                //Crear p
                let p = document.createElement("p");
                let textoP = document.createTextNode(`Nivel: ${nivelSocio}`);
                p.appendChild(textoP);
                div.appendChild(p);

                //Crear p2
                let p2 = document.createElement("p");
                let textoP2 = document.createTextNode(`Ciudad: ${ciudadSocio}`);
                p2.appendChild(textoP2);
                div.appendChild(p2);

                //Añadir div al body
                document.body.appendChild(div);
            })
            .catch((error) => {
                //Crear div
                let div = document.createElement("div");

                //Crear h1
                let h1 = document.createElement("h1");
                let textoH1 = document.createTextNode("El socio " + nombreSocio.value + " no existe");
                h1.appendChild(textoH1);
                div.appendChild(h1);

                //Añadir div al body
                document.body.appendChild(div);
            });
    }
});
