function checkAvailability() {
  var formContainer = document.querySelector('.product-form--container');
  
  if (formContainer) {
    const rootDiv = document.querySelector('.product-form--root');
    const productName = rootDiv?.getAttribute('data-title');

    var selectedLocation = {
      lat: localStorage.getItem('userLat'),
      lon: localStorage.getItem('userLon')
    };

    fetch('https://thalasshome-api.ew.r.appspot.com/services/check_availability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productName: productName,
        location: selectedLocation
      })
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      // bootstrapFakeData(data) // inject fake data for testing purposes

      if (!data.product_available) {
        showTopMessage('Malheureusement, ce produit n\'est actuellement pas disponible dans votre région.', false);
        const addToCartButton = document.querySelector('.product-form--add-to-cart');
        addToCartButton.disabled = true;
        addToCartButton.style.backgroundColor = '#d3d3d3';
        addToCartButton.style.cursor = 'not-allowed';

        const calendarContainer = document.querySelector('.rental-dates');
        if (calendarContainer) {
          calendarContainer.style.display = 'none';
        }
      }
      else {
        showTopMessage('Bonne nouvelle : ce produit est bien délivrable et disponible dans votre région !', true);
      }

      if (Array.isArray(data.unavailable_dates) && data.unavailable_dates.length > 0) {
        const unavailableDates = data.unavailable_dates;
        $('.datepicker').datepicker('option', 'beforeShowDay', function(date) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          const dateString = `${year}-${month}-${day}`;
      
          if (unavailableDates.includes(dateString)) {
            return [false, 'unavailable-date', 'This date is unavailable'];
          } else {
            return [true, '', ''];
          }
        });
      }

      if (data.rent_duration_day) {
        const rentDurationDay = data.rent_duration_day;
        $("#rental-start-date").datepicker("option", "onSelect", function(selectedDate) {
          let startDate = new Date(selectedDate);
          let maxEndDate = new Date(startDate);
          maxEndDate.setDate(startDate.getDate() + rentDurationDay);
          $("#rental-end-date").datepicker("option", "minDate", startDate);
          $("#rental-end-date").datepicker("option", "maxDate", maxEndDate);
        });
      }
    })
    .catch(error => console.error('Error:', error));
  } else {
    console.error('Form container not found');
  }
}

// Initial check
document.addEventListener('DOMContentLoaded', checkAvailability);

// Listen for address changes
document.addEventListener('checkAvailability', checkAvailability);

/**
 * Injects fake availability data for testing purposes.
 * @param {Object} data - The API response object to be modified.
 */
function bootstrapFakeData(data) {
  data.product_available = true;

  const now = new Date();
  const formatDate = date => date.toISOString().split('T')[0]; // Formats date as 'YYYY-MM-DD'

  data.unavailable_dates = [
    formatDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2)),
    formatDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3)),
    formatDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 4)),
    formatDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5))
  ];

  console.log('Injected fake data:', data);
}// --------------------- MESSAGES ---------------------
function showTopMessage(message, isSuccess) {
  var messageDiv = document.getElementById('location-message');
  messageDiv.style.display = 'block';
  messageDiv.style.backgroundColor = isSuccess ? '#d4edda' : '#f8d7da';
  messageDiv.style.color = isSuccess ? '#155724' : '#721c24';
  messageDiv.style.borderColor = isSuccess ? '#c3e6cb' : '#f5c6cb';
  messageDiv.innerHTML = message;
}

