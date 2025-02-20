//     <!-- custom-add by owner -->


// --------------------- LOCATION AUTH ---------------------
document.addEventListener('DOMContentLoaded', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var userLat = position.coords.latitude;
      var userLon = position.coords.longitude;
      console.log("lat", userLat, "lon", userLon);

      localStorage.setItem('userLat', userLat);
      localStorage.setItem('userLon', userLon);

      var authorizedLocations = [
        [46.18, 6.24],
        [43.57, 1.47] //Toulouse
      ];

      var isAuthorized = authorizedLocations.some(function(coords) {
        var distance = getDistanceFromLatLonInKm(userLat, userLon, coords[0], coords[1]);
        return distance <= 30;
      });

      if (isAuthorized) {
        showMessage('Welcome! You are within the authorized location.', true);
      } else {
        showMessage('Sorry, you are not within the authorized location.', false);
      }
    }, function(error) {
      showMessage('Unable to retrieve your location.', false);
    });
  } else {
    showMessage('Geolocation is not supported by this browser.', false);
  }
});


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Rayon de la Terre en km
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// Fonction pour afficher le message à l'utilisateur
function showMessage(message, isSuccess) {
  var messageDiv = document.getElementById('location-message');
  messageDiv.style.display = 'block';
  messageDiv.style.backgroundColor = isSuccess ? '#d4edda' : '#f8d7da';
  messageDiv.style.color = isSuccess ? '#155724' : '#721c24';
  messageDiv.style.borderColor = isSuccess ? '#c3e6cb' : '#f5c6cb';
  messageDiv.innerHTML = message;
}
// --------------------- END LOCATION AUTH ---------------------



// --------------------- DATEPICKER --------------------- 
$(document).ready(function() {
  $('.datepicker').datepicker({
    dateFormat: 'yy-mm-dd',
    minDate: 0
  });
});
// --------------------- END DATEPICKER ---------------------