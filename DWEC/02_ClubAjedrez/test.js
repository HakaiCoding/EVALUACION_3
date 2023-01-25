let socios = [
    {
        nombre: 'Marta',
        edad: 15,
        nivel: 'C',
        ciudad: 'Villalba'
    },
    {
        nombre: 'Max',
        edad: 32,
        nivel: 'B',
        ciudad: 'Alpedrete'
    },
    {
        nombre: 'Julián',
        edad: 9,
        nivel: 'D',
        ciudad: 'Alpedrete'
    },
    {
        nombre: 'Amadeo',
        edad: 16,
        nivel: 'A',
        ciudad: 'Villalba'
    }
];


let nombreSocio = document.getElementById("nombreSocio");

nombreSocio.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
    
        let existe = false;
        for (let i = 0; i < socios.length; i++) {
            if (socios[i].nombre === nombreSocio.value) {
                existe = true;
            }

            if (existe) {

                let div = document.createElement("div");

                let h1 = document.createElement("h1");
                let textoH1 = document.createTextNode("El socio " + nombreSocio.value + " existe");
                h1.appendChild(textoH1);
                div.appendChild(h1);

                let p = document.createElement("p");
                let textoP = document.createTextNode(`Nivel: ${socios[i].nivel}`);
                p.appendChild(textoP);
                div.appendChild(p);

                let p2 = document.createElement("p");
                let textoP2 = document.createTextNode(`Ciudad: ${socios[i].ciudad}`);
                p2.appendChild(textoP2);
                div.appendChild(p2);

                document.body.appendChild(div);

            } else {
                let div = document.createElement("div");
                div.innerHTML = `<h1>El socio ${nombreSocio.value} no existe</h1>`;
                document.body.appendChild(div);
            }
        }

    }
});



