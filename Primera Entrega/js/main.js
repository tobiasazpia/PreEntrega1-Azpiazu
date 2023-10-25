let tropasAzules = 10000;
let tropasRojas = 10000;
let round = 0;

function Atacar(tropas){
    return Math.round(tropas/5+(Math.random()-0.5)*tropas/10);
}

function AnunciarGanador(){
    let ganador = "";
    let perdedor = "";
    let tropas = 0;
    if(tropasAzules > 0){
        ganador = "Azul";
        perdedor = "Rojo";
        tropas = tropasAzules;
    }
    else{
        ganador = "Rojo";
        perdedor = "Azul";
        tropas = tropasRojas;
    }
    console.log(perdedor + " se quedo sin tropas! Nuestro ganador es el equipo " + ganador + " con " + tropas + " tropas todavia en pie!");
}

while (tropasAzules > 0 && tropasRojas > 0) {
    round++;
    console.log("Las tropas azules todavia tienen " + tropasAzules + " soldados.");
    console.log("Las tropas rojas todavia tienen " + tropasRojas + " soldados.");
    console.log("------------Round " + round + "------------");

    let ataqueAzul = Atacar(tropasAzules);
    let ataqueRojo = Atacar(tropasRojas);

    console.log("Azul ataca elimnando " + ataqueAzul + " soldados rojos");
    console.log("Rojo ataca elimnando " + ataqueRojo + " soldados azules");
   
    tropasRojas -= ataqueAzul;
    tropasAzules -= ataqueRojo;

}

console.log("------------Ganador------------");
AnunciarGanador();