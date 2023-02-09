// Ejercicio 1

// Modifica el código del ejemplo 2 quítale los onclicks del código html y manja los eventos clic desde el código javascript.

let player = document.getElementById('player');
let playButton = document.getElementById('play');
let pauseButton = document.getElementById('pause');
let volumeUpButton = document.getElementById('volumeUp');
let volumeDownButton = document.getElementById('volumeDown');
let muteButton = document.getElementById('mute');

playButton.addEventListener('click', function () {
    player.play();
});

pauseButton.addEventListener('click', function () {
    player.pause();
});

volumeUpButton.addEventListener('click', function () {
    player.volume += 0.1;
});

volumeDownButton.addEventListener('click', function () {
    player.volume -= 0.1;
});

muteButton.addEventListener('click', function () {
    if (player.muted) {
        player.muted = false;
    } else {
        player.muted = true;
    }
});
