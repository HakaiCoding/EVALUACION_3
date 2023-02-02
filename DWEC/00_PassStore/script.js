const LOGIN_CREDENTIALS = [
    { username: 'admin', password: 'admin' }
]

function login(event) {
    event.preventDefault();
    const username = document.getElementById('userInput').value
    const password = document.getElementById('passInput').value

    const user = LOGIN_CREDENTIALS.find(user => user.username === username && user.password === password)

    if (user) {
        //reset form
        document.getElementById('loginForm').reset();

        alert('Login successful');
        window.location.href = 'https://www.google.com';
    } else {
        //reset form
        document.getElementById('loginForm').reset();
        alert('Login failed');
    }
}

let loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', login);
