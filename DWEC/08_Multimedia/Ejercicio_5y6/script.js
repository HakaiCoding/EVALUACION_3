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

let songList = document.getElementById("song--list");

let currentSong = document.getElementById("current--song");

//Bucle for para recorrer el array songs, y añadir cada elemento del array a la lista
for (let i = 0; i < songs.length; i++) {

    let song = document.createElement("li");
    let songName = document.createTextNode(songs[i]);
    song.appendChild(songName);
    songList.appendChild(song);

    //Añadir evento click a cada elemento de la lista
    song.addEventListener("click", function (event) {
        event.target.style.color = "yellow";

        //Cambia el texto del elemento currentSong
        currentSong.innerHTML = "Reproduciendo: ";
        currentSong.innerHTML += event.target.innerHTML;

        //Cuando otro elemento de la lista es seleccionado, se cambia el color del anterior a blanco
        for (let j = 0; j < songs.length; j++) {
            if (event.target.innerHTML != songs[j]) {
                songList.children[j].style.color = "black";
            }
        }

        
    });

}
