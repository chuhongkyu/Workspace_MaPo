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

function newMap(){
    window.open("./map.html");
}

function newGhost(){
    window.open("./ghost.html");
}

function findLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        LOCATION.innerHTML = "Geolocation is not supported by this browser.";
      }
} 

const container = document.getElementById('map');

var lat = 0;
var long = 0;

function showPosition(position) {
    LOCATION.innerHTML = "위도: " + position.coords.latitude +
    "<br>경도: " + position.coords.longitude;

    var lat  = position.coords.latitude;
    var long = position.coords.longitude;

    var container = document.getElementById('map'), 
    mapOption = { 
        center: new kakao.maps.LatLng(lat, long), 
        level: 2 
    };
    var map = new kakao.maps.Map(container, mapOption); 

    
   var markerPosition  = new kakao.maps.LatLng(lat, long); 
   var marker = new kakao.maps.Marker({
    position: markerPosition
   });


   var iwContent = '<div style="padding:5px;">여기가 어디여~!</div>', 
   iwPosition = new kakao.maps.LatLng(lat + 0.0002, long), 
   iwRemoveable = true; 

    var infowindow = new kakao.maps.InfoWindow({
    map: map,
    position : iwPosition, 
    content : iwContent,
    removable : iwRemoveable
});



marker.setMap(map);


}











// 'geolocation' in navigator 두가지 방법
// /navigator.geolocation





