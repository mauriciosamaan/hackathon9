let sueldo = 1500;
let i = 0;

while (i < 6) {
    sueldo = sueldo*(1.1**i);
    console.log("sueldo del año " + (i+1) + " " + sueldo);
    i++;
};

