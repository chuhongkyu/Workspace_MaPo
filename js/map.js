const LOCATION = document.getElementById("location_text");

function findLocation(){
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //   } else {
    //     LOCATION.innerHTML = "Geolocation is not supported by this browser.";
    //   }
    navigator.geolocation? navigator.geolocation.getCurrentPosition(showPosition):LOCATION.innerHTML = "Geolocation is not supported by this browser.";
} 

const container = document.getElementById('map');

let LEVEL = 2;

let lat = 0;
let long = 0;

const imageSrc = 'img/kakao.png';
const imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
const imageOption = {offset: new kakao.maps.Point(10, 0)};
const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

const iwContent = '<div class="info_style" >백합아파트</div>';

function showPosition(position) {
    LOCATION.innerHTML = "위도: " + position.coords.latitude + "<br>경도: " +
            position.coords.longitude;

    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    var mapOption = {
            center: new kakao
                .maps
                .LatLng(lat, long),
            level: LEVEL
        };
    
////////////////////////////////////
    var map = new kakao.maps.Map(container, mapOption);
    var markerPosition = new kakao.maps.LatLng(lat, long);
    var marker = new kakao.maps.Marker({
        position: markerPosition, 
        image: markerImage // 마커이미지 설정 
    });

//////////////////////////////////////
  
    var iwPosition = new kakao.maps.LatLng(lat, long),
        iwRemoveable = true;

    var infowindow = new kakao.maps
        .InfoWindow(
            {map: map, position: iwPosition, content: iwContent, removable: iwRemoveable}
        );

    marker.setMap(map);
    infowindow.open(map, marker);
    // console.log(lat, long);
}


function upMap(){
    LEVEL++
    // console.log(LEVEL);
    navigator.geolocation.getCurrentPosition(showPosition);
}

function downMap(){
    LEVEL--
    if(LEVEL <= 0){
        LEVEL = 0;
        alert("더 이상 확대할 수 없어요.")
    }
    // console.log(LEVEL);
    navigator.geolocation.getCurrentPosition(showPosition);
}

// console.log(lat, long);








// 'geolocation' in navigator 두가지 방법
// /navigator.geolocation