// --------------------- DATEPICKER custom-add--------------------- 
$(document).ready(function() {
    $.datepicker.regional['fr'] = {
      closeText: 'Fermer',
      prevText: 'Précédent',
      nextText: 'Suivant',
      currentText: 'Aujourd\'hui',
      monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
      dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
      dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
      weekHeader: 'Sem.',
      dateFormat: 'yy-mm-dd',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
    };
    
    $.datepicker.setDefaults($.datepicker.regional['fr']);
  
    $("#rental-start-date").datepicker({
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
        minDate: 0
    });
  });
  // --------------------- END DATEPICKER ---------------------