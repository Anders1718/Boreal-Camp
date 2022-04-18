'use strict'
window.addEventListener('load', function(){

    var imagenesCabana = ["img/Fogata.png", "img/jacuzzi1.jpeg", "img/IMG_2426.jpeg"];
    var imagen_cabana = this.document.getElementById("imagen_cabana");
    var cont = 0;
    var boton_izquierda = this.document.getElementById("boton_izquierda");
    var boton_derecha = this.document.getElementById("boton_derecha");

    boton_izquierda.onclick = function(){
        if(cont == 0){
            cont = 2;
        }
        else{
            cont--;
        } 
        imagen_cabana.src = imagenesCabana[cont];
        
        
    }

    boton_derecha.onclick = function(){
        if(cont == 2){
            cont = 0;
        }
        else{
            cont++;
        } 
        imagen_cabana.src = imagenesCabana[cont];
    }

});