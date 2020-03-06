var arrayLibros = [];

function constructorLibro(titulo, editorial) {
    this.titulo = titulo;
    this.editorial = editorial;
}


for (var i = 0; i < 4; i++) {

    var titulo = window.prompt("Ingresa un titulo de un libro.");
    var editorial = window.prompt("Ingresa se editorial.");

    var libro = new constructorLibro(titulo, editorial);
    arrayLibros.push(libro);
}

function mostrarLibros() {

    var nuevaVentana = window.open("", "", "width=200,height=300");

    for (var i = 0; i < arrayLibros.length; i++) {

        nuevaVentana.document.write("Titulo del libro nº" + (i + 1) + ": " + arrayLibros[i].titulo + "<br>");
    }
}

function insertarLibro() {

    var titulo = document.getElementById("tituloLibro").value;
    var editorial = document.getElementById("editorialLibro").value;

    var nuevoLibro = new constructorLibro(titulo, editorial);
    arrayLibros.push(nuevoLibro);

    document.getElementById("tituloLibro").value = "";
    document.getElementById("editorialLibro").value = "";
}