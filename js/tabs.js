function openCity(e, cityName) {

  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablinks");
  
  for (i = 0; i < tablinks.length; i++) {
  //tablinks[i].className = tablinks[i].className.replace(" active", "");
  tablinks[i].classList.remove("active");
  }
  
  document.getElementById(cityName).style.display = "block";
  e.currentTarget.className += " active";
}