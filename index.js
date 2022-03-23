const video = document.getElementById("#myVideo");
const btn = document.getElementById("#myBtn");

const LOCATION = document.getElementById("location_text");

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

function findLocation(){
    navigator.geolocation? navigator.geolocation.getCurrentPosition(showPosition): LOCATION.innerHTML = "error";
} // 이것이 삼항 연산자

function showPosition(position){
    LOCATION.innerHTML = "위도: " + position.coords.latitude +
    "<br>경도: " + position.coords.longitude;
}

// function findLocation(){
//     if('geolocation' in navigator){
//         navigator.geolocation.getCurrentPosition(showPosition);
//         console.log('12312');
        
//     } else{
//         LOCATION.innerHTML = "error";
//     }
// }

//'geolocation' in navigator 두가지 방법
///navigator.geolocation
