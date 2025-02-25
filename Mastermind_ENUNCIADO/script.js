//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";

const msj_sinIntentos = "No tienes más intentos :( "
const msj_acertado = "Has acertado! Enhorabuena! :D "
const msj_intento = "Intentos restantes: "


//Declaración de variables globales.
const master = [];
const userCombi = [];
let intento = 0;
var aciertos = 0;
contador = 0;

function init() {
    document.querySelector("#info").textContent = msj_intento + MAX_INTENTOS;
    //1. Genera el código random del master
    while (master.length < MAX_COMBI_COLORES) {
        let code = COLORS[Math.floor(Math.random() * COLORS.length)];
        if (!master.includes(code)) {
            master.push(code);
        }
    }
      console.log(master);
    //2. Crea todas las filas según el número de intentos.
    for(let j = 0; j < MAX_INTENTOS; j ++){
        const filas = document.getElementById('Result');
        filas.innerHTML += ROW_RESULT;
    }
    
}


/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha
introducido el usuario.
Informamos al usuario del resultado y del número de intentos que lleva*/
function Comprobar() {
    if(userCombi.length != 4){
        alert ("afegeix 4 colors crac")
        añadeColor(color)
    }
    document.getElementById("combiText").value = "";

    arrayFilas=document.getElementsByClassName("rowResult");
        const celes = arrayFilas[intento].getElementsByClassName('celUserCombi flex');
        for(let j = 0; j < MAX_COMBI_COLORES; j++){
            celes[j].style.backgroundColor = userCombi[j];
        }
        if(intento + 1 >= MAX_INTENTOS) {
            document.querySelector("#info").textContent = msj_sinIntentos;
            revelarCombinacion();
            return
        }
    
        if (comprobarCombinacion()){
            document.querySelector("#info").textContent = msj_acertado;
        }else{
            intento++;
            contador = 0;
            document.querySelector("#info").textContent = msj_intento + (MAX_INTENTOS - intento);
        }    
    //const filas = document.getElementsByClassName('celUserCombi flex');
  
    //intento ++
}
function revelarCombinacion() {
    for (let color in master){
     let mostrarMaster= document.querySelectorAll("#master .w100 .w25");
      mostrarMaster[color].querySelector(".cel").style.background = master[color];
    }
}

/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color) {
    console.log("color: ",color, userCombi)
    let inFilas = document.getElementById("combiText");
    if(contador < MAX_COMBI_COLORES){
        inFilas.value += " " + color;
        userCombi[contador] = color;
        contador ++;
    }else alert("maximo de numeros añadidos")
    
}

function comprobarCombinacion() {
    let aciertos = 0;

    for (let color in userCombi) {
        let posColor = master.indexOf(userCombi[color])
        if(posColor != -1){
            //el color existe
            if(color == posColor){
               circuloColor(color).style.background = BLACK
               aciertos++;
            }else{
                circuloColor(color).style.background = WHITE
            }
        }else{
            //el color no existe
            circuloColor(color).style.background = GREY
        }
    }
    return aciertos == 4;
}
function circuloColor(color){
    let rowResults = document.querySelectorAll("#Result div.rowResult");
    let rowIntento = rowResults[intento];
    let celda = rowIntento.querySelectorAll(".rowCercleResult div.w40");
    return celda[color].querySelector('.cercleResult')
}

/** Template con el código HTML que corresponde a cada fila de juego/intento. */
const ROW_RESULT = `<div class="rowResult w100 flex wrap">
    <div class="rowUserCombi w75 flex wrap">
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
    </div>
    <div class="rowCercleResult w25 flex wrap center">
       <div class="w40 h40">
            <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
    </div>
</div>`;