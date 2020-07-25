let antiguedad = prompt("Ingrese la cantidad de años laborados por el trabajador");

if (antiguedad >= 1 && antiguedad <= 5) {
    bono = antiguedad*100
} else if (antiguedad > 5) {
    bono = 1000
} else {
    bono = 0
};

console.log(bono)