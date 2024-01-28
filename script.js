//DOM
let botonTirar=document.getElementById('btn');
let jugadas=document.getElementById('jugadas');
let tiradas=document.getElementById('tiradas');
let quedan=document.getElementById('queda');

let premio1=document.getElementById("premio_1");
let premio2=document.getElementById("premio_2");

let imagenDado1 = document.getElementById("imagen_primero");
let imagenDado2 = document.getElementById("imagen_segundo");

let resultado = document.getElementById("resultado");

let ventanaGanado = document.getElementById('ventanaGanado')
//VARIABLES
const cantJugadas=10;
let cantTiradas=0;
let cantQuedan=10;

let aleatorio1;
let aleatorio2;
let aleatorioPremio1;
let aleatorioPremio2;


//FUNCIONES

//Función que hace todos los cálculos y los dados también
function TirarDado(){
    aleatorio1 = Math.floor(Math.random() * 6)+1;
    aleatorio2 = Math.floor(Math.random() * 6)+1;
    aleatorioPremio1 = Math.floor(Math.random() * 6)+1;
    aleatorioPremio2 = Math.floor(Math.random() * 6)+1;

    cantTiradas++;
    cantQuedan--;
    
    jugadas.textContent = "Jugadas: " + cantJugadas;
    tiradas.textContent = "Tiradas: " + cantTiradas;
    quedan.textContent = "Quedan: " + cantQuedan;

    premio1.textContent="Premio 1: "+aleatorioPremio1;
    premio2.textContent="Premio 2: "+aleatorioPremio2;
   
    imagenDado1.src = "img/dado_" + aleatorio1 + ".png";
    imagenDado2.src = "img/dado_" + aleatorio2 + ".png";

    verPremios(aleatorio1,aleatorioPremio1,aleatorio2,aleatorioPremio2);
}

//función que muestra en el cuadro de premios lo que ha ganado
function verPremios(ale1, premio1, ale2, premio2) {


    if (ale1 === premio1 || ale2 === premio1 ) {
        resultado.textContent="Has ganado el primer premio!! ";
        botonTirar.disabled = true;//deshabilita el boton si gana
        ventanaGanado.textContent='HAS GANADO EL PRIMER PREMIO';
        ventanaGanado.style.opacity = '1';
        lanzarConfeti();
    } else if(ale1 === premio2 || ale2 === premio2){
        resultado.textContent="Has ganado el segundo premio ";
        botonTirar.disabled=true;//deshabilita el boton si gana
        ventanaGanado.textContent='HAS GANADO EL SEGUNDO PREMIO';
        ventanaGanado.style.opacity = '1';
        lanzarConfeti();
    }else{
        resultado.textContent="Nada!!";
        botonTirar.disabled=false;//la vuelve a habilitar si no ha ganado nada
    }
}

//Función que para cuando ya no quedan tiradas
function quererTirar(){
    if(cantQuedan>0){
        TirarDado();
    }else{
        botonTirar.textContent="No quedan más tiradas ";
    }
}

//sacado de gitHub
function lanzarConfeti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

botonTirar.addEventListener('click',quererTirar);