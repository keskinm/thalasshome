//     <!-- custom-add by owner -->


document.addEventListener('DOMContentLoaded', function() {
  var formContainer = document.querySelector('.product-form--container');
  
  if (formContainer) {

    const rootDiv = document.querySelector('.product-form--root');
    const productName = rootDiv?.getAttribute('data-title');

    console.log("PRODUCT NAME", productName, "rootDiv", rootDiv);

    // var productName = 'some_product_name';
    var selectedLocation = {
      lat: localStorage.getItem('userLat'),
      lon: localStorage.getItem('userLon')
    };

    fetch('https://thalasshome-api.ew.r.appspot.com/check_availability', {
      method: 'POST', // Ensure this is the correct method
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
      if (data.available) {
        console.log("Available");
      } else {
        console.log("Not available");
      }
    })
    .catch(error => console.error('Error:', error));
  } else {
    console.error('Form container not found');
  }
}); 