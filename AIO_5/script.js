let dado1;
let dado2;

const jugadas=10;
let tiradas=0;
let quedan=10;

let botonTirar=document.getElementById('btn');
//Función que hace todos los cálculos y los dados también
function TirarDado(){
    let aleatorio1 = Math.floor(Math.random() * 6)+1;
    let aleatorio2 = Math.floor(Math.random() * 6)+1;
    let suma= aleatorio1+aleatorio2;

    let aleatorioPremio1 = Math.floor(Math.random() * 6)+1;
    let aleatorioPremio2 = Math.floor(Math.random() * 6)+1;

    tiradas++;
    quedan--;
    
    document.getElementById("jugadas").textContent = "Jugadas: " + jugadas;
    document.getElementById("tiradas").textContent = "Tiradas: " + tiradas;
    document.getElementById("queda").textContent = "Quedan: " + quedan;

    let  premio1=document.getElementById("premio_1")
    let premio2=document.getElementById("premio_2")
    premio1.textContent="Premio 1: "+aleatorioPremio1;
    premio2.textContent="Premio 2: "+aleatorioPremio2;

    let imagenDado1 = document.getElementById("imagen_primero");
    let imagenDado2 = document.getElementById("imagen_segundo");
    imagenDado1.src = "img/dado_" + aleatorio1 + ".png";
    imagenDado2.src = "img/dado_" + aleatorio2 + ".png";

    verPremios(aleatorio1,aleatorioPremio1,aleatorio2,aleatorioPremio2);
    
}

//Función que para cuando ya no quedan tiradas
function quererTirar(){
    if(quedan>0){
        TirarDado();
       
    }else{
        botonTirar.textContent="No quedan más tiradas ";
       
        
    }
}

botonTirar.addEventListener('click',quererTirar);


function verPremios(ale1, premio1, ale2, premio2) {
    let resultado=document.getElementById("resultado");

    if (ale1 === premio1 || ale2 === premio1 ) {
        console.log("Ha ganado!");
        resultado.textContent="Has ganado el primer premio!! ";
        botonTirar.disabled=true;
    } else if(ale1 === premio2 || ale2 === premio2){
        console.log("Ganó el segundo premio");
        resultado.textContent="Has ganado el segundo premio ";
        botonTirar.disabled=true;
        
    }else{
        resultado.textContent="Nada!! ";
        botonTirar.disabled=false;
    }
}