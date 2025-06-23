"use strict"

function anadirEfectoMenu(){
    document.querySelectorAll(".elemento-menu").forEach(function(elemento){
        elemento.addEventListener("mouseover",()=>{
            elemento.style.backgroundColor = "black";
        })
    })

}

window.addEventListener("DOMContentLoaded",()=>{
    anadirEfectoMenu()

});