import programmeAnim from "./animation";
//import { gsap } from "gsap";

programmeAnim.init();

let homepage = document.querySelector('.homepage-header');
if(homepage){

    var img = document.querySelector('.leafdown');
    let verriereparts = document.querySelectorAll('.cls-1');
    
    function loaded() {
        for(let i=0; i<verriereparts.length; i++){
            verriereparts[i].classList.add("verriere-js");
        }
    } 
    
    if (img.complete) {
        loaded();
    
    }  else {
        img.addEventListener('load', loaded)
    /*     img.addEventListener('error', function() {
            alert('error')
        }) */
    }
}


let pageWithMenu = document.querySelector('.pagewmenu');

if(pageWithMenu){
    let burger = document.querySelector('.burger-container');
    let header = document.querySelector('.header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}


