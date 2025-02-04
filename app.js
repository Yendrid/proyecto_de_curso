// Crear un array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim(); // Eliminar espacios extra al principio y al final

    // Validar si el nombre no está vacío
    if (!nombre) {
        mostrarAlerta("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array y limpiar el campo
    amigos.push(nombre);
    inputNombre.value = ""; // Limpiar el campo de entrada

    // Actualizar la lista de amigos
    actualizarListaAmigos();
}

// Función para mostrar un mensaje de alerta en la página
function mostrarAlerta(mensaje) {
    const alerta = document.createElement('div');
    alerta.classList.add('alerta'); // Se le añade la clase alerta para estilizarla
    alerta.textContent = mensaje;

    // Mostrar la alerta al principio del body
    document.body.prepend(alerta);

    // Eliminar la alerta después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla

    // Crear un nuevo elemento <li> para cada amigo y agregarlo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarAlerta("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionar un amigo aleatorio de la lista
    const ganador = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el ganador en la lista de resultados
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li>¡El amigo secreto es: <strong>${ganador}</strong>!</li>`;
}

// Asignar los eventos a los botones
document.getElementById('button-add').addEventListener('click', agregarAmigo);
document.getElementById('button-draw').addEventListener('click', sortearAmigo);
