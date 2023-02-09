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

// Save the volume of the player in Web Storage
player.addEventListener('volumechange', function () {
    localStorage.setItem('volume', player.volume);
});


// Get the volume of the player from the Web Storage when the page is loaded
window.addEventListener('load', function () {
    player.volume = localStorage.getItem('volume');
});

// Save if the player is muted in Web Storage
player.addEventListener('volumechange', function () {
    if (player.muted) {
        localStorage.setItem('muted', true);
    } else {
        localStorage.setItem('muted', false);
    }
});

// Get if the player is muted from the Web Storage when the page is loaded
window.addEventListener('load', function () {
    if (localStorage.getItem('muted') === 'true') {
        player.muted = true;
    } else {
        player.muted = false;
    }
});

