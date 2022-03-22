const video = document.getElementById("#myVideo");
const btn = document.getElementById("#myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "<p><i class='fa-solid fa-pause'></i>멈춰</p>";
    } else {
        video.pause();
        btn.innerHTML = "<p><i class='fa-solid fa-play'></i>재생</p>";
    }
}


function self(){
    window.location.href = 'https://www.naver.com';
}

function newwindow(){
    window.open('https://www.naver.com');
}