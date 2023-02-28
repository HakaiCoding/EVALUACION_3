let main = document.querySelector("main");

const url = 'https://randomuser.me/api/?results=10';

fetch(url)
  .then((resp) => resp.json())
  .then(data => {
    let users = data.results;
    let names = '';
    for (let i = 0; i < users.length; i++) {
      let name = users[i].name.first + ' ' + users[i].name.last;
      names += `<li>${name}</li>`;
    }
    main.innerHTML = `<ul>${names}</ul>`;
  })
  .catch(error => {
    main.innerHTML = `<p class='error'>${error}</p>`;
  });
