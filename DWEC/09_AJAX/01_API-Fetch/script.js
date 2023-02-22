let main = document.querySelector("main");

const url = 'https://randomuser.me/api/';

// Create a 2D array to store the user HTML elements in a grid
let userGrid = [[], []];

for (let i = 0; i < 10; i++) {
  fetch(url)
    .then((resp) => resp.json())
    .then(data => {
      let datos = data.results[0];
      let foto = datos.picture.large;
      let mail = datos.email;
      let nombre = datos.name.first;
      let apellido = datos.name.last;
      let numero = datos.location.street.number;
      let calle = datos.location.street.name;
      let ciudad = datos.location.city;
      let estado = datos.location.state;

      // Create an HTML element for the user
      let userHTML = `<figure>` + `<img src='${foto}' alt='foto'>` + `<figure>` +
          `<p>${nombre} ${apellido} </p>` +
          `<p>Email: ${mail} </p>` +
          `<p>${numero} ${calle} </p>` +
          `${ciudad} (${estado.toUpperCase()}) </p>`;

      // Calculate the row and column index for the user
      let row = Math.floor(i / 5);
      let col = i % 5;

      // Add the user HTML element to the userGrid array
      userGrid[row][col] = userHTML;

      // If all 10 users have been added, append the userGrid to the main element
      if (i === 9) {
        let gridHTML = '';
        for (let r = 0; r < 2; r++) {
          gridHTML += '<div class="row">';
          for (let c = 0; c < 5; c++) {
            gridHTML += '<div class="col">' + userGrid[r][c] + '</div>';
          }
          gridHTML += '</div>';
        }
        main.innerHTML += gridHTML;
      }
    })
    .catch(error => {
      main.innerHTML += `<p class='error'>${error}</p>`;
    });
}
