// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoInput = document.getElementById("amigo"); //Campo de texto para ingresar los nombres
let listaAmigos = document.getElementById("listaAmigos"); //Lista de nombres
let resultado = document.getElementById("resultado"); //Elemento para mmostrar resultado del sorteo 

// Almacenar los nombres
let nombres = [];

// Funcion para agregar un nombre a la lista
function agregarAmigo() {
    let nombre = amigoInput.value.trim();  // Eliminar espacios en blanco al inicio y al final

    // Validar si el campo esta vacio
    if (nombre == "") {
        alert("Por favor, ingresa un nombre valido.");
        return; // Detener la funcion si nó hay nombre
    }

    // Agregar el nombre a la lista y actualizar la lista
    nombres.push(nombre);
    actualizarLista();

    // Limpiar el campo de texto
    amigoInput.value = "";
}

// Función para actualizar la lista de nombres en la pantalla 
function actualizarLista() {
    listaAmigos.innerHTML = ""; //Limpiar la lista antes de actualizar

    // Recorrer el array de nombres y agregarlos a la lista 
    nombres.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto 
function sortearAmigo() {
    // Verificar si hay nombres en las listas 
    if (nombres.length === 0) {
        resultado.innerHTML = "<li>No hay nombres en la lista.</li>";
        return; //Detener la ejecución si no hay nombres
    }

    // Seleccionar un nombre aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];

    // Mostrar resultado en pantalla
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;

}
