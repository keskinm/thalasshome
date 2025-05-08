//     <!-- custom-add -->


// --------------------- LOCATION AUTH ---------------------

// Variables globales pour stocker la sélection
let selectedLat = null;
let selectedLon = null;
let resetBtn = null;
let addressInput = null;
let suggestionsList = null;
let cache = new Map(); // Pour éviter de refaire les mêmes requêtes

// --------------------- MODALES & UI ---------------------
function showAddressModal() {
  const modalMessages = document.getElementById('modalMessages');
  if (modalMessages) {
    modalMessages.innerHTML = '';
  }
  document.getElementById('addressModal').style.display = 'block';
  updateClearButtonVisibility();
}

function closeModal(check = true) {
  if (check) {
    if (selectedLat && selectedLon) {
      localStorage.setItem('userLat', selectedLat);
      localStorage.setItem('userLon', selectedLon);
      console.log("✅ Coordonnées enregistrées:", selectedLat, selectedLon);
      showModalMessage("Adresse enregistrée", true);
    } else {
      console.warn("⚠️ Aucune coordonnée sélectionnée.");
      showModalMessage("Veuillez sélectionner une adresse avant de valider", false);
    }
  }
  const modal = document.getElementById('addressModal');
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.opacity = "1";
  }, 500);

  if (resetBtn) {
    resetBtn.style.display = 'block';
  }
}

// --------------------- API & AUTOCOMPLÉTION ---------------------
function fetchSuggestions(query) {
  const url = 'https://nominatim.openstreetmap.org/search?' + new URLSearchParams({
    q: query,
    format: 'json',
    addressdetails: '1',
    limit: '10',
    countrycodes: 'fr,ch'
  });

  fetch(url)
    .then(response => response.json())
    .then(data => {
      cache.set(query, data);
      displaySuggestions(data);
    })
    .catch(err => {
      console.error("Erreur Nominatim:", err);
    });
}

function displaySuggestions(data) {
  if (!suggestionsList) {
    suggestionsList = document.getElementById('suggestions');
  }
  if (!data || data.length === 0) {
    suggestionsList.style.display = 'none';
    return;
  }
  suggestionsList.innerHTML = '';
  suggestionsList.style.display = 'block';

  data.forEach(item => {
    const address = item.address;
    if (!address) return;
    const cc = address.country_code ? address.country_code.toLowerCase() : '';
    if (cc !== 'fr' && cc !== 'ch') return;

    const li = document.createElement('li');
    li.style.padding = '5px';
    li.style.cursor = 'pointer';
    li.textContent = item.display_name;

    li.addEventListener('click', function () {
      selectedLat = item.lat;
      selectedLon = item.lon;
      selectedItemName = item.display_name;

      localStorage.setItem('userLat', selectedLat);
      localStorage.setItem('userLon', selectedLon);
      localStorage.setItem('userItemName', item.display_name);
      console.log("✅ Coordonnées enregistrées:", selectedLat, selectedLon);

      if (!addressInput) {
        addressInput = document.getElementById('addressInput');
      }
      addressInput.value = item.display_name;
      suggestionsList.style.display = 'none';
      toggleAddToCartButton(true);
      closeModal();
    });

    suggestionsList.appendChild(li);
  });

  if (suggestionsList.children.length === 0) {
    suggestionsList.style.display = 'none';
  }
}

// --------------------- INITIALISATION ---------------------
document.addEventListener('DOMContentLoaded', function () {
  addressInput = document.getElementById('addressInput');
  suggestionsList = document.getElementById('suggestions');
  resetBtn = document.getElementById('resetAddressButton');
    let debounceTimer = null;

  if (!addressInput || !suggestionsList) return;

  let prevSelectedUserItem = localStorage.getItem('userItemName');
  if (prevSelectedUserItem) {
    addressInput.value = prevSelectedUserItem;
  }

  addressInput.addEventListener('input', function () {
    clearTimeout(debounceTimer);

    const query = addressInput.value.trim();
    if (query.length < 3) {
      suggestionsList.style.display = 'none';
      return;
    }

    debounceTimer = setTimeout(() => {
      if (cache.has(query)) {
        displaySuggestions(cache.get(query));
      } else {
        fetchSuggestions(query);
      }
    }, 500);

    updateClearButtonVisibility();
  });

  if (!localStorage.getItem('userLat') || !localStorage.getItem('userLon')) {
    toggleAddToCartButton(false);
    resetBtn.style.display = 'none';
    showAddressModal();
  } else {
    resetBtn.style.display = 'block';
  }
});

function toggleAddToCartButton(enable) {
  const addToCartButton = document.querySelector('.product-form--add-to-cart');
  if (addToCartButton) {
    addToCartButton.disabled = !enable;
    if (enable) {
      addToCartButton.style.backgroundColor = '';
      addToCartButton.style.cursor = 'pointer';
    } else {
      addToCartButton.style.backgroundColor = '#d3d3d3';
      addToCartButton.style.cursor = 'not-allowed';
    }
  }
}

// --------------------- GÉOLOCALISATION ---------------------
function resetAddress() {
  localStorage.removeItem('userLat');
  localStorage.removeItem('userLon');
  localStorage.removeItem('userItemName');
  selectedLat = null;
  selectedLon = null;
  showAddressModal();
  updateClearButtonVisibility();
}

function useGeolocation() {
  var storedLat = localStorage.getItem('userLat');
  var storedLon = localStorage.getItem('userLon');

  if (storedLat && storedLon) {
    console.log("📍 useGeolocation: Position déjà enregistrée :", storedLat, storedLon);
    closeModal(false);
    showModalMessage("Géolocalisation réussie", true);
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
        toggleAddToCartButton(true);
        showModalMessage("Géolocalisation réussie", true);
        closeModal(false);
      },
      function(error) {
        console.warn("⚠️ Échec géolocalisation:", error);
        showModalMessage("La géolocalisation a échoué. Veuillez saisir votre commune manuellement.", false);
      }
    );
  } else {
    showModalMessage("Votre navigateur ne supporte pas la géolocalisation. Merci de saisir votre commune manuellement.", false);
  }
}

function showModalMessage(message, isSuccess) {
  const modalMessages = document.getElementById('modalMessages');
  if (!modalMessages) return;

  const messageEl = document.createElement('div');
  messageEl.textContent = message;
  messageEl.style.padding = '10px';
  messageEl.style.margin = '10px 0';
  messageEl.style.borderRadius = '4px';
  messageEl.style.textAlign = 'center';
  messageEl.style.fontSize = '14px';
  messageEl.style.opacity = '1';
  messageEl.style.transition = 'opacity 0.5s ease-out';

  if (isSuccess) {
    messageEl.style.backgroundColor = '#d4edda';
    messageEl.style.color = '#155724';
    messageEl.innerHTML = '✔ ' + message;
  } else {
    messageEl.style.backgroundColor = '#f8d7da';
    messageEl.style.color = '#721c24';
    messageEl.innerHTML = '✖ ' + message;
  }

  modalMessages.appendChild(messageEl);

  setTimeout(() => {
    messageEl.style.opacity = '0';
  }, 2000);

  setTimeout(() => {
    if (messageEl.parentNode) {
      messageEl.parentNode.removeChild(messageEl);
    }
  }, 2500);
}

function clearAddressInput() {
  if (!addressInput) {
    addressInput = document.getElementById('addressInput');
  }
  addressInput.value = '';
  if (suggestionsList) {
    suggestionsList.style.display = 'none';
  }
  updateClearButtonVisibility();
}


function updateClearButtonVisibility() {
  const clearBtn = document.getElementById('clearAddressButton');
  if (clearBtn && addressInput) {
    clearBtn.style.display = addressInput.value ? 'block' : 'none';
  }
}

// --------------------- END LOCATION AUTH ---------------------



