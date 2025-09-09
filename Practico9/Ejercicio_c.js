function convertir() {
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let tipo = document.getElementById("tipo").value;
    let resultado;
    const dolar = 350; // 1 USD = 350 ARS
    const real = 70;   // 1 BRL = 70 ARS
    const euro = 380;  // 1 EUR = 380 AR
    switch(tipo){
        case "pesosADolares":
            resultado = cantidad / dolar;
            break;
        case "dolaresAPesos":
                    resultado = cantidad * dolar;
            break;
        case "pesosAReales":
            resultado = cantidad / real;
            break;
        case "realesAPesos":
            resultado = cantidad * real;
            break;
        case "pesosAEuros":
            resultado = cantidad / euro;
            break;
        case "eurosAPesos":
            resultado = cantidad * euro;
            break;
        default:
            resultado = "Seleccione un tipo de conversión válido";
    }
    document.getElementById("resultado").value = resultado;
}