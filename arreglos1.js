let edadesIzquierdo = [];
let edadesDerecha = [];

function agregarEdad(){
let edad = recuperarInt("edad");
    if (!isNaN(edad) && edad > 0) {
        edadesIzquierdo.push(edad);
        mostrarTextoEnCaja("edad", "");
        console.log("Arreglo Izquierdo:", edadesIzquierdo);
    } else {
        alert("Por favor, ingrese una edad válida.");
    }
}

