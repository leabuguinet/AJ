var img = document.querySelector('.palmier');
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

