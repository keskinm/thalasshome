//     <!-- custom-add by owner -->


// --------------------- LOCATION AUTH ---------------------
document.addEventListener('DOMContentLoaded', function() {
  var storedLat = localStorage.getItem('userLat');
  var storedLon = localStorage.getItem('userLon');

  if (storedLat && storedLon) {
    console.log("📍 Position déjà enregistrée :", storedLat, storedLon);
    return;
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var userLat = position.coords.latitude;
        var userLon = position.coords.longitude;
        console.log("📍 Géolocalisation réussie:", userLat, userLon);
        localStorage.setItem('userLat', userLat);
        localStorage.setItem('userLon', userLon);
      },
      function(error) {
        manualGeoLocalization();
      }
    );
  }
  else {
    manualGeoLocalization();
  }
});



function manualGeoLocalization() {
  var userLat = prompt("🌍 Impossible de détecter votre position. Entrez votre latitude :");
  var userLon = prompt("🌍 Entrez votre longitude :");

  if (userLat && userLon) {
    localStorage.setItem('userLat', userLat);
    localStorage.setItem('userLon', userLon);
    console.log("📍 Position manuelle enregistrée :", userLat, userLon);
  } else {
    console.warn("⚠️ Position manuelle annulée.");
  }
}

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
  $("#rental-start-date").datepicker({
      dateFormat: "yy-mm-dd",
      minDate: 0,
      onSelect: function(selectedDate) {
          let startDate = new Date(selectedDate);
          let maxEndDate = new Date(startDate);
          maxEndDate.setDate(startDate.getDate() + 2);

          $("#rental-end-date").datepicker("option", "minDate", startDate);
          $("#rental-end-date").datepicker("option", "maxDate", maxEndDate);
      }
  });

  $("#rental-end-date").datepicker({
      dateFormat: "yy-mm-dd",
      minDate: 0
  });
});
// --------------------- END DATEPICKER ---------------------