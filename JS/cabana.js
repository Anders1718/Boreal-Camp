'use strict'
window.addEventListener('load', function(){


    var imagenesCabana = ["img/casa6.jpeg", "img/casa7.jpeg", "img/casa2.jpeg"];
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


    var imagenesCabana2 = ["img/baño.png", "img/Cocina.jpeg", "img/Malla.jpeg"];
    var imagen_cabana2 = this.document.getElementById("imagen_cabana_2");

    var cont2 = 0;

    var boton_izquierda2 = this.document.getElementById("boton_izquierda_2");
    var boton_derecha2 = this.document.getElementById("boton_derecha_2");

    boton_izquierda2.onclick = function(){
        if(cont2 == 0){
            cont2 = 2;
        }
        else{
            cont2--;
        } 
        imagen_cabana2.src = imagenesCabana2[cont2];
        
        
    }

    boton_derecha2.onclick = function(){
        if(cont2 == 2){
            cont2 = 0;
        }
        else{
            cont2++;
        } 
        imagen_cabana2.src = imagenesCabana2[cont2];
        
    }

    var imagenesCabana3 = ["img/Paisaje.png", "img/decoracion.jpeg", "img/parqueadero.jpeg"];
    var imagen_cabana3 = this.document.getElementById("imagen_cabana_3");

    var cont3 = 0;

    var boton_izquierda3 = this.document.getElementById("boton_izquierda_3");
    var boton_derecha3 = this.document.getElementById("boton_derecha_3");

    boton_izquierda3.onclick = function(){
        if(cont3 == 0){
            cont3 = 2;
        }
        else{
            cont3--;
        } 
        imagen_cabana3.src = imagenesCabana3[cont3];   
    }

    boton_derecha3.onclick = function(){
        if(cont3 == 2){
            cont3 = 0;
        }
        else{
            cont3++;
        } 
        imagen_cabana3.src = imagenesCabana3[cont3];
        
    }

});