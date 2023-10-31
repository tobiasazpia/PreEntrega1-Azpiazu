function Atacar(tropas) {
    return Math.round(tropas / 5 + (Math.random() - 0.5) * tropas / 10);
}

function AnunciarGanador() {
    let ganador = "";
    let perdedor = "";
    let tropas = 0;
    if (tropasAzules > 0) {
        ganador = "Azul";
        perdedor = "Rojo";
        tropas = tropasAzules;
    }
    else {
        ganador = "Rojo";
        perdedor = "Azul";
        tropas = tropasRojas;
    }
    console.log(perdedor + " se quedo sin tropas! Nuestro ganador es el equipo " + ganador + " con " + tropas + " tropas todavia en pie!");
    alert(perdedor + " se quedo sin tropas! Nuestro ganador es el equipo " + ganador + " con " + tropas + " tropas todavia en pie!");
}

let round = 0;

let tropasAzules = prompt("Cuantas tropas azules hay?", "1000");
let fuerzaAzules = prompt("Y que tan fuertes son? (1 para debiles, 2 para normales, 3 para fuertes)", "2");
let tropasRojas = prompt("Cuantas tropas rojas hay?", "1000");
let fuerzaRojas = prompt("Y que tan fuertes son? (1 para debiles, 2 para normales, 3 para fuertes)", "2");

let fuerzaA = "";
let fuerzaR = "";

switch (parseInt(fuerzaAzules)) {
    case 1:
        fuerzaA = "debiles";
        break;
    case 2:
        fuerzaA = "normales";
        break;
    case 3:
        fuerzaA = "fuertes";
        break;
    default:
        alert("default");
        break;
}

switch (parseInt(fuerzaRojas)) {
    case 1:
        fuerzaR = "debiles";
        break;
    case 2:
        fuerzaR = "normales";
        break;
    case 3:
        fuerzaR = "fuertes";
        break;
    default:
        alert("default");
        break;
}

fuerzaAzules = fuerzaAzules / 3 + 1 / 3;
fuerzaRojas = fuerzaRojas / 3 + 1 / 3;

alert("El ejercito fuerza Azules, con " + tropasAzules + " tropas " + fuerzaA + ", se enfrenta al ejercito Rojo, con " + tropasRojas + " tropas " + fuerzaR + ". Quien triunfara?!");

while (tropasAzules > 0 && tropasRojas > 0) {
    console.log("Las tropas azules todavia tienen " + tropasAzules + " soldados.");
    console.log("Las tropas rojas todavia tienen " + tropasRojas + " soldados.");
    console.log("------------Round " + round + "------------");

    let ataqueAzul = Math.round(Atacar(tropasAzules) * fuerzaAzules);
    let ataqueRojo = Math.round(Atacar(tropasRojas) * fuerzaRojas);

    console.log("Azul ataca eliminando " + ataqueAzul + " soldados rojos");
    console.log("Rojo ataca eliminando " + ataqueRojo + " soldados azules");

    tropasRojas -= ataqueAzul;
    tropasAzules -= ataqueRojo;
}

console.log("------------Ganador------------");
AnunciarGanador();