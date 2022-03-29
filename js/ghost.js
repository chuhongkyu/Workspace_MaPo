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


function createStar() {
    const star= document.createElement("div");
    star.classList.add('star');
    star.style.marginLeft = randomPosition() + '%';
    document.body.appendChild(star);
}

function randomPosition() {
    return Math.floor(Math.random() * 100);
    

}

for (let i=0; i<500; i++) {
    createStar();
}

