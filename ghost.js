
const Ghost = document.querySelector(".ghost");

document.body.addEventListener("mousemove", function(e) {
    // console.log(e);
    Ghost.style.left = e.pageX + 'px';
    Ghost.style.top = e.pageY + 'px';
});


var appear = false;


function hiddenGhost(){
    appear = true;
    Ghost.classList.add('hidden');
    console.log("type");
}

function appearGhost(){
    if(appear = true){
        Ghost.classList.remove('hidden');
        appear = false;
    }
}

window.addEventListener("dblclick", hiddenGhost);
window.addEventListener("click", appearGhost);