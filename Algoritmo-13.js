Cantidad = prompt("Ingrese la cantidad de alumnos a evaluar");
i = 0;
aprobados = 0;
desaprobados = 0;

while (i < Cantidad) {
    nota = prompt("Ingrese la nota del alumno " + (i+1))
    if (nota >= 11) {
        aprobados = aprobados + 1
    } else {
        desaprobados = desaprobados + 1
    }
    i++
}

console.log("Aprobados: " + aprobados);
console.log("Desaprobados: " + desaprobados);
