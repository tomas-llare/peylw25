function mostrarDatos() {
    contraseña = prompt("Ingrese la contraseña:");
    if (contraseña === "0805") {
        document.getElementById("datos").innerHTML = `
            <p>Nombre: Tomi Llarena</p>
            <p>Edad: 17</p>
            <p>Curso: 5º5º</p>
            <p>Escuela: EPET 20</p>
        `;
    } else {
        alert("Contraseña incorrecta");
    }
}

function valorSeleccionado(Valor) {
    if (Valor < 0) {
        return -1;
    } else if (Valor >= 0 && Valor < 10) {
        return 0;
    } else if (Valor >= 10 && Valor < 50) {
        return 1;
    } else if (Valor >= 50 && Valor < 100) {
        return 2;
    } else {
        return 3;
    }
}

console.log(valorSeleccionado(-5));
console.log(valorSeleccionado(5));
console.log(valorSeleccionado(20));
console.log(valorSeleccionado(70));
console.log(valorSeleccionado(120));