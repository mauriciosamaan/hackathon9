cantidad = prompt("Ingrese la cantidad de focos");
rojos = 0;
verdes = 0;
blancos = 0;
i = 0;

while (i < cantidad) {
    color = prompt("Ingrese color del foco numero " + (i+1) + " (r - rojo, v - verde, b - blanco")
    switch(color) {
        case "r":
            rojos = rojos + 1;
            break;
        case "v":
            verdes = verdes + 1;
            break;
        case "b":
            blancos = blancos + 1;
            break;
        default: i = i - 1;
        window.alert("Ingrese un color valido")
    }
    i = i + 1;
}

console.log("Rojos = " + rojos);
console.log("Verdes = " + verdes);
console.log("Blancos = " + blancos);