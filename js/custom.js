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

$("#contactUsForm").submit(function(e) {
    console.log(e);
    var data = $( this ).serialize()
    var url = "https://adviser-api-stage.herokuapp.com/api/open/leads"; // the script where you handle the form input.

    //url = url + "?" + data
    data = data + "&lead_source_token=12312a069b07a80711d5c2ab011dffab0199e8d430b8b07f96932";
    console.log(data);
    $.ajax({
           type: "POST",
           url: url,
           data: $("#contactUsForm").serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); // show response from the php script.
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});

function recommendSocket() {
  subject = 'Why not try a socket free trial?';
  body = 'If you sign up for a free trial at www.socket.co.nz we can both take advantage of their sweet suite of tools. I would like that. Would you like that?';
  window.location.href = "mailto:''?subject=" + subject + "&body=" + body;
}
