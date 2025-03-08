//     <!-- custom-add -->


// --------------------- LOCATION AUTH ---------------------

// Variables globales pour stocker la sélection
let selectedLat = null;
let selectedLon = null;
let lastQueryLength = 0; // pour suivre la longueur de la dernière requête
let resetBtn = null; // bouton "Modifier mon adresse"

function showAddressModal() {
  // Vider le conteneur des messages pour éviter d'afficher un ancien message
  const modalMessages = document.getElementById('modalMessages');
  if (modalMessages) {
    modalMessages.innerHTML = '';
  }
  document.getElementById('addressModal').style.display = 'block';
}


// Fermer la modale et enregistrer si une adresse a été sélectionnée
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
  // On déclenche l'animation de fade-out
  modal.style.opacity = "0";
  // Après la transition, on masque la modale et on réinitialise l'opacité
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.opacity = "1"; // reset pour la prochaine ouverture
  }, 500);

  // Utilise la variable globale resetBtn pour l'afficher
  if (resetBtn) {
    resetBtn.style.display = 'block';
  }
}



document.addEventListener('DOMContentLoaded', function () {
  const addressInput = document.getElementById('addressInput');
  const suggestionsList = document.getElementById('suggestions');
  resetBtn = document.getElementById('resetAddressButton'); // Utilisation de la variable globale
  let debounceTimer = null;
  let cache = new Map(); // Cache local pour éviter de refaire les mêmes requêtes

  if (!addressInput || !suggestionsList) return;

  addressInput.addEventListener('input', function () {
    clearTimeout(debounceTimer); // Reset du timer à chaque frappe

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
    }, 500); // 500 ms de délai après la dernière frappe
  });

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
        cache.set(query, data); // Mise en cache des résultats
        displaySuggestions(data);
      })
      .catch(err => {
        console.error("Erreur Nominatim:", err);
      });
  }

  function displaySuggestions(data) {
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
        
        // Enregistrement immédiat dans le localStorage
        localStorage.setItem('userLat', selectedLat);
        localStorage.setItem('userLon', selectedLon);
        console.log("✅ Coordonnées enregistrées:", selectedLat, selectedLon);

        addressInput.value = item.display_name;
        suggestionsList.style.display = 'none';

        // Fermer la modale après sélection
        closeModal();
      });

      suggestionsList.appendChild(li);
    });

    if (suggestionsList.children.length === 0) {
      suggestionsList.style.display = 'none';
    }
  }

  // Vérifie l'état du localStorage pour le bouton reset
  if (!localStorage.getItem('userLat') || !localStorage.getItem('userLon')) {
    resetBtn.style.display = 'none';
    showAddressModal();
  } else {
    resetBtn.style.display = 'block';
  }
});




function resetAddress() {
  localStorage.removeItem('userLat');
  localStorage.removeItem('userLon');
  selectedLat = null;
  selectedLon = null;
  showAddressModal();
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






function showTopMessage(message, isSuccess) {
  var messageDiv = document.getElementById('location-message');
  messageDiv.style.display = 'block';
  messageDiv.style.backgroundColor = isSuccess ? '#d4edda' : '#f8d7da';
  messageDiv.style.color = isSuccess ? '#155724' : '#721c24';
  messageDiv.style.borderColor = isSuccess ? '#c3e6cb' : '#f5c6cb';
  messageDiv.innerHTML = message;
}


function showModalMessage(message, isSuccess) {
  const modalMessages = document.getElementById('modalMessages');
  if (!modalMessages) return;

  // Crée l'élément de message
  const messageEl = document.createElement('div');
  messageEl.textContent = message;
  
  // Style de base
  messageEl.style.padding = '10px';
  messageEl.style.margin = '10px 0';
  messageEl.style.borderRadius = '4px';
  messageEl.style.textAlign = 'center';
  messageEl.style.fontSize = '14px';
  messageEl.style.opacity = '1';
  messageEl.style.transition = 'opacity 0.5s ease-out';
  
  // Couleurs et icône selon le résultat
  if (isSuccess) {
    messageEl.style.backgroundColor = '#d4edda';
    messageEl.style.color = '#155724';
    // On ajoute une icône check (ex: Unicode ✔)
    messageEl.innerHTML = '✔ ' + message;
  } else {
    messageEl.style.backgroundColor = '#f8d7da';
    messageEl.style.color = '#721c24';
    // On ajoute une icône croix (ex: Unicode ✖)
    messageEl.innerHTML = '✖ ' + message;
  }
  
  // Insère le message dans le conteneur
  modalMessages.appendChild(messageEl);
  
  // Après 2 secondes, on déclenche le fade-out
  setTimeout(() => {
    messageEl.style.opacity = '0';
  }, 2000);
  
  // On supprime l'élément du DOM après la transition (0.5s de fade-out)
  setTimeout(() => {
    if (messageEl.parentNode) {
      messageEl.parentNode.removeChild(messageEl);
    }
  }, 2500);
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