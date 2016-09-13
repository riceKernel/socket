// preloader
$(window).load(function() {
  //$('.preloader').fadeOut(10000); // set duration in brackets
  $('.preloader').fadeOut(1500); // Morgan 270516
  //$('.borrowers-content').hide()
});

$(function() {
  new WOW().init();
  $('.templatemo-nav').singlePageNav({
    offset: 70,
    filter: ':not(.external)',
    currentClass: 'active',
  });

  /* Hide mobile menu after clicking on a link
  -----------------------------------------------*/
  $('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });
})



//the contact us form submission:
$("#contactUsForm").submit(function(e) {

    e.preventDefault();
    successMsg = "Thank you for your message - we will respond as soon as we can!  In the mean time, why not sign up for a free trial?"
    sendMessage('contactUsSubmit', 'contactUsForm', successMsg)

});



$("#findAdviserForm").submit(function(e) {

    e.preventDefault();
    successMsg = "Thank you for your request - A socket adviser near you will be in touch very soon!"
    sendMessage('findAdviserSubmit', 'findAdviserForm', successMsg)
});

function sendMessage(buttonId, formId, successMsg) {

  $("#" + buttonId).prop('disabled', true);
  $("#" + buttonId).addClass('submit-button-disabled')
  var data = $( '#' + formId ).serialize()
  var url = "https://adviser-api.herokuapp.com/api/open/leads";
  data = data + "&lead_source_token=dde22fa32c8cde2c9b02512d4aeb27bcfc9006687e4cae0b";
  $.ajax({
         type: "POST",
         url: url,
         data: data,
         success: function(data)
         {
             alert(successMsg); // show response from the php script.

         }
       }).done(function() {
         document.getElementById(formId).reset();
         $("#" + buttonId).removeClass('submit-button-disabled')
         $("#" + buttonId).prop('disabled', false);
        });
}

function recommendSocket() {
  subject = 'Why not try a socket free trial?';
  body = 'If you sign up for a free trial at www.socket.co.nz we can both take advantage of their sweet suite of tools. I would like that. Would you like that?';
  window.location.href = "mailto:''?subject=" + subject + "&body=" + body;
}
