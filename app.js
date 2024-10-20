function initMap() {
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,  
        center: userLocation 
      });

      const marker = new google.maps.Marker({
        position: userLocation,
        map: map
      });
    }, function() {
      handleLocationError(true, map.getCenter());
    });
  } else {
    handleLocationError(false, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, pos) {
  alert(browserHasGeolocation
    ? "Error: The Geolocation service failed."
    : "Error: Your browser doesn't support geolocation.");
}