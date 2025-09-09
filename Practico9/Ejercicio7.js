function init() {
    mostrarMeses();
    mostrarPares();
    mostrarFuncion();
    mostrarFactorial(5); // ejemplo con n = 5
    mostrarPrimos();
}

// a) Meses
function mostrarMeses() {
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    
    // i) for
    let resFor = "For:\n";
    for(let i=0; i<meses.length; i++){
        resFor += meses[i] + " ";
    }
    document.getElementById("mesesFor").textContent = resFor;

    // ii) while
    let resWhile = "While:\n";
    let i = 0;
    while(i < meses.length){
        resWhile += meses[i] + " ";
        i++;
    }
    document.getElementById("mesesWhile").textContent = resWhile;

    // iii) do while
    let resDoWhile = "Do While:\n";
    i = 0;
    do {
        resDoWhile += meses[i] + " ";
        i++;
    } while(i < meses.length);
    document.getElementById("mesesDoWhile").textContent = resDoWhile;

    // iv) for in
    let resIn = "For in:\n";
    for(let index in meses){
        resIn += meses[index] + " ";
    }
    document.getElementById("mesesIn").textContent = resIn;
}

// b) Números pares menores a 500
function mostrarPares() {
    let res = "";
    for(let i=0; i<500; i+=2){
        res += i + " ";
    }
    document.getElementById("pares").textContent = res;
}

// c) Primeros 100 números de la función
function mostrarFuncion() {
    let res = "";
    for(let x=1; x<=100; x++){
        let fx = 3*x + 5 - x*x;
        res += fx + " ";
    }
    document.getElementById("funcion").textContent = res;
}

// d) Factorial
function factorial(n) {
    if(n===0) return 1;
    return n * factorial(n-1);
}

function mostrarFactorial(n) {
    let res = "";
    for(let i=0; i<=n; i++){
        res += "factorial(" + i + ") = " + factorial(i) + "\n";
    }
    document.getElementById("factorialResultado").textContent = res;
}

// e) Números primos menores a 100
function mostrarPrimos() {
    let res = "";
    for(let n=2; n<100; n++){
        if(esPrimo(n)){
            res += n + " ";
        }
    }
    document.getElementById("primos").textContent = res;
}

function esPrimo(num) {
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}