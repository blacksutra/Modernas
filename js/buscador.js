// Obtener referencias a elementos HTML
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsList = document.getElementById("results-list");

// Definir una lista de juegos (reemplaza esto con tus datos reales)
const juegos = [
    { nombre: "Silla Europea", precio: "$50", descripcion: "Silla estilo 90'", url: "Sillas/#" },
    { nombre: "Meza", precio: "$72", descripcion: "Meza hecha perfectamente para ser de escritorio", url: "Mezas/#" },
    { nombre: "Meza de Jardin", precio: "$60", descripcion: "Meza Perfecta para exteriores.", url: "Mezas_ext/#" },
    { nombre: "Celular", precio: "$14", descripcion: "Celular SmartPhone del año 2019.", url: "Electronicos/#" },
    { nombre: "Cuadro", precio: "$30", descripcion: "Cuadro de un Autoretratro del artista.", url: "Cuadros/#" },
    // Agrega más juegos aquí
];

// Agregar un evento input al campo de búsqueda
searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        // Si el campo de búsqueda está vacío, ocultar los resultados
        resultsList.innerHTML = "";
    } else {
        const resultados = buscarJuegos(searchTerm);
        mostrarResultados(resultados);
    }
});

// Función para buscar juegos por término de búsqueda
function buscarJuegos(termino) {
    return juegos.filter(juego => juego.nombre.toLowerCase().includes(termino));
}

// Función para mostrar los resultados de búsqueda y redireccionar
function mostrarResultados(resultados) {
    resultsList.innerHTML = ""; // Limpiar resultados anteriores

    if (resultados.length === 0) {
        resultsList.innerHTML = "<li>No se encontraron resultados.</li>";
    } else {
        resultados.forEach(juego => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = juego.url; // Asignar la URL de la página del juego
            link.innerHTML = `
                <h3>${juego.nombre}</h3>
                <p class="price">${juego.precio}</p>
                <p>${juego.descripcion}</p>
            `;
            listItem.appendChild(link);
            resultsList.appendChild(listItem);
        });
    }
}
