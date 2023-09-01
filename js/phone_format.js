$(document).ready(function() {
    // Evento acionado ao digitar no campo de telefone
    $('#phone').on('input', function() {
      let phoneNumber = $(this).val().replace(/\D/g, ''); // Remove todos os caracteres não numéricos
      let formattedPhoneNumber = formatPhoneNumber(phoneNumber);
      $(this).val(formattedPhoneNumber);
    });

    // Função para formatar o número de telefone
    function formatPhoneNumber(phoneNumber) {
      let formatted = '';
      if (phoneNumber.length <= 2) {
        formatted = '(' + phoneNumber;
      } else if (phoneNumber.length <= 7) {
        formatted = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2);
      } else {
        formatted = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2, 7) + '-' + phoneNumber.substring(7, 11);
      }
      return formatted;
    }
  });