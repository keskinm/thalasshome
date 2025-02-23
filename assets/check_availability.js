//     <!-- custom-add by owner -->

document.addEventListener('DOMContentLoaded', function() {
  var formContainer = document.querySelector('.product-form--container');
  
  if (formContainer) {

    const rootDiv = document.querySelector('.product-form--root');
    const productName = rootDiv?.getAttribute('data-title');

    //@TODO WHAT WE SEND IS NOT THE ORDER LOCATION BUT USER LOCATION... FIX THIS
    var selectedLocation = {
      lat: localStorage.getItem('userLat'),
      lon: localStorage.getItem('userLon')
    };

    fetch('https://thalasshome-api.ew.r.appspot.com/check_availability', {
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
      bootstrapFakeData(data) // inject fake data for testing purposes
      

      if (!data.product_available) {
        showMessage('Malheureusement, il n\'y a pas de livreur disponible dans votre région.', false);
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
        showMessage('Bonne nouvelle : les livraison sont bien disponibles dans ta région !', true);
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

    })
    .catch(error => console.error('Error:', error));
  } else {
    console.error('Form container not found');
  }
});


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
}
