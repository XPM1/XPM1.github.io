if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position){
    document.getElementById("positon").innerHTML="Your location: <br>latitude: " + positon.coords.latitude + "<br>longitude" + position.coords.longitude
  })
}
