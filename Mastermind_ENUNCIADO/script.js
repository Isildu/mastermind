//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";


//Declaración de variables globales.
const master = [];
const userCombi = [];
var intento = 0;
var aciertos = 0;

function init() {
    let combo = [];
    //1. Genera el código random del master
    for(let i = 0; i < MAX_COMBI_COLORES; i++) {
        let code = (COLORS[Math.floor(Math.random() * COLORS.length)]);
        combo[i] = code;
      }
      console.log(combo);
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
    contador = 0;
    document.getElementById("combiText").value = "";
    intento ++
    const filas2 = document.getElementsByClassName('w25')
    const filas = document.getElementsByClassName('celUserCombi flex');
    for(let j = 0; j < MAX_COMBI_COLORES; j++){
        filas2[intento] = filas[j].style.backgroundColor = combo2[j];
    }
}

/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
let contador = 0;
let combo2 = [];
function añadeColor(color) {
    console.log("color: ",color, combo2)
    let inFilas = document.getElementById("combiText");
    if(contador < MAX_COMBI_COLORES){
        inFilas.value += " " + color;
        combo2[contador] = color;
        contador ++;
    }else alert("maximo de numeros añadidos")
    
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