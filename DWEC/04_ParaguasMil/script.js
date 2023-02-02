// Creacion de array productos con objetos
let productos = [
    { referencia: "1", titulo: "Producto 1", foto: "https://picsum.photos/200/300", precio: 10 },
    { referencia: "2", titulo: "Producto 2", foto: "https://picsum.photos/200/301", precio: 20 },
    { referencia: "3", titulo: "Producto 3", foto: "https://picsum.photos/200/302", precio: 30 },
    { referencia: "4", titulo: "Producto 4", foto: "https://picsum.photos/200/303", precio: 40 },
    { referencia: "5", titulo: "Producto 5", foto: "https://picsum.photos/200/304", precio: 50 }
];

// Creacion de array de carrito
let carrito = [];

// Creacion caja "container" y adición al DOM
let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

// Creacion caja "product-list-container" y adición a "container"
let productListContainer = document.createElement("div");
productListContainer.id = "product-list-container";
container.appendChild(productListContainer);

// Creacion input select y adición a "product-list-container"
let select = document.createElement("select");
select.id = "product-list";
productListContainer.appendChild(select);

// Creacion Option "Seleccione un producto" y adición a "select"
let option = document.createElement("option");
option.text = "Seleccione un producto";
option.value = "0";
select.appendChild(option);

// Creacion caja "info-product-container" y adición a "product-list-container"
let infoProductContainer = document.createElement("div");
infoProductContainer.id = "info-product-container";
productListContainer.appendChild(infoProductContainer);

// Creacion caja "carrito-container" y adición a "container"
let carritoContainer = document.createElement("div");
carritoContainer.id = "carrito-container";
container.appendChild(carritoContainer);
let carritoH2 = document.createElement("h2");
let carritoH2Text = document.createTextNode("Carrito");
carritoH2.appendChild(carritoH2Text);
carritoContainer.appendChild(carritoH2);

// Creacion boton "carrito-button" y adición a "carrito-container"
let carritoButton = document.createElement("button");
carritoButton.id = "carrito-button";
carritoButton.disabled = true;
let carritoButtonText = document.createTextNode("Tramitar pedido");
carritoButton.appendChild(carritoButtonText);
carritoContainer.appendChild(carritoButton);

// For Loop para crear options del select
for (let i = 0; i < productos.length; i++) {
    option = document.createElement("option");
    option.text = `${productos[i].titulo} - ${productos[i].precio}€`;
    option.value = productos[i].referencia;
    select.appendChild(option);
}

// Evento change para mostrar detalles del producto seleccionado
select.addEventListener("change", function () {
    let selectedRef = this.value;
    let selectedProduct = productos.find(function (product) {
        return product.referencia === selectedRef;
    });

    infoProductContainer.innerHTML = "";
    infoProductContainer.innerHTML = `
      <p>Título: ${selectedProduct.titulo}</p>
      <p>Precio: ${selectedProduct.precio}€</p>
      <p>Referencia: ${selectedProduct.referencia}</p>
      <p><img src="${selectedProduct.foto}"/></p>
      <button id="buy-button">Comprar</button>  
    `;

    // Evento click para añadir producto al carrito
    let buyButton = document.getElementById("buy-button");
    buyButton.addEventListener("click", function () {
        carrito.push({ titulo: selectedProduct.titulo, precio: selectedProduct.precio });
        let itemP = document.createElement("p");
        let itemPText = document.createTextNode(`${selectedProduct.titulo} - ${selectedProduct.precio}€`);
        itemP.appendChild(itemPText);
        carritoContainer.insertBefore(itemP, carritoButton);

        if (carrito.length > 0) {
            carritoButton.disabled = false;
        }

        // Evento doble click para eliminar producto del carrito
        itemP.addEventListener("dblclick", function () {
            carritoContainer.removeChild(itemP);
            carrito.splice(carrito.indexOf(selectedProduct), 1);

            if (carrito.length === 0) {
                carritoButton.disabled = true;
            }
        });
    });
});

// Evento click para tramitar pedido
carritoButton.addEventListener("click", function () {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }

    let totalH3 = document.createElement("h3");
    let totalH3Text = document.createTextNode(`Total: ${total}€`);
    totalH3.appendChild(totalH3Text);
    carritoContainer.appendChild(totalH3);


    // Promesa para aplicar descuento
    let descuento;
    let totalDescuento;
    let totalDescuentoH3;
    let totalDescuentoH3Text;

    new Promise(function (resolve, reject) {
        if (total > 120) {
            descuento = total * 0.05;
            totalDescuento = total - descuento;
            totalDescuentoH3 = document.createElement("h3");
            totalDescuentoH3Text = document.createTextNode(`Total con descuento: ${totalDescuento}€`);
            resolve();
        }
        else {
            reject();
        }
    }).then(function () {
        totalDescuentoH3.appendChild(totalDescuentoH3Text);
        carritoContainer.appendChild(totalDescuentoH3);
        refreshPage();
    }).catch(function () {
        refreshPage();
    });

    // Funcion que muestra un alert confirmado el pedido y recarga la pagina tras 1,5 segundos
    function refreshPage() {
        return new Promise(resolve => {
            setTimeout(() => {
                alert("¡Pedido realizado con éxito!");
                location.reload();
                resolve();
            }, 1500);
        });
    }


    // Funcion para aplicar descuento (SIN PROMESA)

    // if (total > 120) {
    //     let descuento = total * 0.05;
    //     let totalDescuento = total - descuento;
    //     let totalDescuentoH3 = document.createElement("h3");
    //     let totalDescuentoH3Text = document.createTextNode(`Total con descuento: ${totalDescuento}€`);
    //     totalDescuentoH3.appendChild(totalDescuentoH3Text);
    //     carritoContainer.appendChild(totalDescuentoH3);
    // }

    // // Funcion para recargar pagina tras 1,5 segundos y mostrar alerta de pedido tramitado 
    // function refreshPage() {
    //     setTimeout(function () {
    //         alert("¡Pedido realizado con éxito!");
    //         location.reload();
    //     }, 1500);
    // }

    // refreshPage();

});
