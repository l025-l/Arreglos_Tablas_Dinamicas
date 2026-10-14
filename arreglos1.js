let edadesIzquierdo = [];
let edadesDerecha = [];

function agregarEdad() {
let edad = recuperarInt("edad");
    if (!isNaN(edad) && edad > 0) {
        edadesIzquierdo.push(edad);
        mostrarTextoEnCaja("edad", "");
        console.log("Arreglo Izquierdo:", edadesIzquierdo);
        pintarTablaIzquierda();
    } else {
        alert("Por favor, ingrese una edad válida.");
    }
}

function pintarTablaIzquierda() {
    let contenido = "";
    let tabla = document.getElementById("tablaIzquierda");

    for (let i = 0; i < edadesIzquierdo.length; i++) {
        contenido += "<tr>";
        contenido += "<td>" + edadesIzquierdo[i] + "</td>";

        contenido += "<td><button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")'>Eliminar</button></td>";
        contenido += "<td><button class='btn-mover' onclick='moverDerecha(" + i + ")'>➜</button></td>";
        contenido += "</tr>";
    }

    tabla.innerHTML = contenido;
}

function eliminarIzquierdo(indice) {
    edadesIzquierdo.splice(indice, 1);
    pintarTablaIzquierda();
}

function pintarTablaDerecha() {
    let contenido = "";
    let tabla = document.getElementById("tablaDerecha");

    for (let i = 0; i < edadesDerecha.length; i++) {
        contenido += "<tr>";

        contenido += "<td><button class='btn-mover' onclick='moverIzquierda(" + i + ")'>⬅</button></td>";
        contenido += "<td>" + edadesDerecha[i] + "</td>";
        contenido += "<td><button class='btn-eliminar' onclick='eliminarDerecho(" + i + ")'>Eliminar</button></td>";
        contenido += "</tr>";
    }

    tabla.innerHTML = contenido;
}

