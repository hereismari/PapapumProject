
$(document).ready(function() {

  $('#send').click(function() {$.ajax({
    $('body').append('<a>oi</a>');
    type: “POST”,
    url: “https://mandrillapp.com/api/1.0/messages/send.json”,
    data: {
      ‘key’: ‘sTna1bSgVFtrQC3241OvFg’,
      ‘message’: {
        ‘from_email’: ‘mari_l_monteiro@hotmail.com’,
        ‘to’: [
            {
              ‘email’: ‘papapumproject@gmail.com’,
              ‘name’: ‘RECIPIENT NAME (OPTIONAL)’,
              ‘type’: ‘to’
            },
          ],
        ‘autotext’: ‘true’,
        ‘subject’: ‘YOUR SUBJECT HERE!’,
        ‘html’: ‘YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!’
      }
    }
  }).done(function(response) {
   console.log(response); // if you're into that sorta thing
 });

  });
});
