//Array songs
const songs = [
    "Abrelapuerta.mp3",
    "Aretha.mp3",
    "BeboyCigala.mp3",
    "CryBaby.mp3",
    "DiasEscuela.mp3",
    "Ifeeltheearth.mp3",
    "Whatsup.mp3"
];

//Evento que muestra en segundos la duración de la canción
let audio = document.getElementById("player");
let currerntDuration = document.getElementById("current-duration");
audio.addEventListener("loadedmetadata", function () {
    currerntDuration.innerHTML = "0:00 / " + formatTime(audio.duration);
});

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) {
        secs = "0" + secs;
    }
    return minutes + ":" + secs;
}


let volumeRange = document.getElementById("volume");
volumeRange.addEventListener("change", function (event) {
    audio.volume = event.target.value / 10;
});

//Evento change al elemento progress para que cambie la posición de la canción
let progress = document.getElementById("progress");
progress.addEventListener("change", function (event) {
    audio.currentTime = event.target.value * audio.duration;
});

//Bucle for para recorrer el array songs, y añadir cada elemento del array a la lista
let songList = document.getElementById("song-list");
for (let i = 0; i < songs.length; i++) {

    let song = document.createElement("li");
    let songName = document.createTextNode(songs[i]);
    song.appendChild(songName);
    songList.appendChild(song);

    //Evento click a cada elemento de la lista
    let currentSong = document.getElementById("current-song");
    currentSong.style.color = "black";
    song.addEventListener("click", function (event) {
        event.target.style.color = "yellow";

        //Cambia el texto del elemento currentSong
        currentSong = document.getElementById("current-song");
        currentSong.innerHTML = "Reproduciendo: ";
        currentSong.innerHTML += event.target.innerHTML;
        currentSong.style.color = "#732c75";

        //Cambia el atributo src del elemento audio
        audio = document.getElementById("player");
        audio.setAttribute("src", "Music/" + event.target.innerHTML);
        audio.play();

        //Cuando otro elemento de la lista es seleccionado, se cambia el color del anterior a negro
        for (let j = 0; j < songs.length; j++) {
            if (event.target.innerHTML != songs[j]) {
                songList.children[j].style.color = "black";
            }
        }

    });

}

//Evento ended al elemento audio para que cambie a la siguiente canción
audio.addEventListener("ended", function() {
    let currentSongIndex = songs.indexOf(audio.getAttribute("src").replace("Music/", ""));
    let nextSongIndex = (currentSongIndex + 1) % songs.length;
    let nextSong = "Music/" + songs[nextSongIndex];
    audio.setAttribute("src", nextSong);
    audio.play();

    //Cambia el color del elemento de la lista de la siguiente canción a amarillo
    songList.children[currentSongIndex].style.color = "black";
    songList.children[nextSongIndex].style.color = "yellow";
});


audio.addEventListener("timeupdate", function () {
    let progress = document.getElementById("progress");
    progress.value = audio.currentTime / audio.duration;
    let currentSongTime = document.getElementById("current-duration");
    currentSongTime.innerHTML = formatTime(audio.currentTime) + " / " + formatTime(audio.duration);
});
