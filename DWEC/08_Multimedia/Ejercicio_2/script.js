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

// Save the volume of the player in a cookie
player.addEventListener('volumechange', function () {
    document.cookie = 'volume=' + player.volume;
});

// Get the volume of the player from the cookie when the page is loaded
window.addEventListener('load', function () {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith('volume=')) {
            player.volume = parseFloat(cookie.substring(7));
        }
    }
});

// Save if the player is muted in a cookie
player.addEventListener('volumechange', function () {
    if (player.muted) {
        document.cookie = 'muted=true';
    } else {
        document.cookie = 'muted=false';
    }
});

// Get if the player is muted from the cookie when the page is loaded
window.addEventListener('load', function () {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith('muted=')) {
            if (cookie.substring(6) === 'true') {
                player.muted = true;
            } else {
                player.muted = false;
            }
        }
    }
});


