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
/*
function forWhom(whom) {
  if(whom === 'advisers') {
    $('.borrowers-content').hide();
    $('.advisers-content').show();
    $('#forAdviserButton').addClass('active');
    $('#forBorrowerButton').removeClass('active');

  };

  if(whom === 'borrowers') {
    $('.borrowers-content').show();
    $('.advisers-content').hide();
    $('#forAdviserButton').removeClass('active');
    $('#forBorrowerButton').addClass('active');
  };
  document.getElementById("divider").scrollIntoView()
}
*/

//the contact us form submission:
$("#contactUsForm").submit(function(e) {
    var data = $( this ).serialize()
    var url = "https://adviser-api-stage.herokuapp.com/api/open/leads";
    data = data + "&lead_source_token=a069b07a80711d5c2ab011dffab0199e8d430b8b07f96932";
    $.ajax({
           type: "POST",
           url: url,
           data: data,//$("#contactUsForm").serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert("Thank you for your message - we will respond as soon as we can!  In the mean time, why not sign up for a free trial?"); // show response from the php script.
           }
         });
    e.preventDefault(); // avoid to execute the actual submit of the form.
});

//The find an adviser submission (different as will eventually have a diff token):
$("#findAdviserForm").submit(function(e) {
    $("#findAdviserSubmit").prop('disabled', true);
    $("#findAdviserSubmit").addClass('submit-button-disabled')
    var data = $( this ).serialize()
    var url = "https://adviser-api-stage.herokuapp.com/api/open/leads";
    data = data + "&lead_source_token=a069b07a80711d5c2ab011dffab0199e8d430b8b07f96932";
    $.ajax({
           type: "POST",
           url: url,
           data: data,
           success: function(data)
           {
               alert("Thank you for your request - A socket adviser near you will be in touch very soon!"); // show response from the php script.

           }
         }).done(function() {
           document.getElementById("findAdviserForm").reset();
           $("#findAdviserSubmit").removeClass('submit-button-disabled')
           $("#findAdviserSubmit").prop('disabled', false);
          });
    e.preventDefault();

});

function recommendSocket() {
  subject = 'Why not try a socket free trial?';
  body = 'If you sign up for a free trial at www.socket.co.nz we can both take advantage of their sweet suite of tools. I would like that. Would you like that?';
  window.location.href = "mailto:''?subject=" + subject + "&body=" + body;
}
