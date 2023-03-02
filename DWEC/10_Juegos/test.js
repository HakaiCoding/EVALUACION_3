// convertir letterBoxes en un array
const letterBoxesArray = Array.from(letterBoxes);

// Asignar evento foco al primer elemento del array letterBoxesArray
letterBoxesArray[0].focus();
// Añadir border 2px solid purple al primer elemento del array letterBoxesArray
letterBoxesArray[0].style.border = '5px solid purple';
// Añadir evento keydown al primer elemento del array letterBoxesArray
letterBoxesArray[0].addEventListener('keydown', function (event) {

    // Si la tecla pulsada es una letra, añadir la letra al elemento
    if (event.key.length === 1) {
        this.innerHTML = event.key;

    }

});