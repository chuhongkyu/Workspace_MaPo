const video = document.querySelector("#myVideo");
const btn = document.querySelector("#myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "<p><i class='fa-solid fa-pause'></i>멈춰</p>";
    } else {
        video.pause();
        btn.innerHTML = "<p><i class='fa-solid fa-play'></i>재생</p>";
    }
}

