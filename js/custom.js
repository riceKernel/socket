// preloader
$(window).load(function() {
  //$('.preloader').fadeOut(10000); // set duration in brackets
  $('.preloader').fadeOut(3000); // Morgan 270516
  $('.borrowers-content').hide()
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

function forWhom(whom) {
  if(whom === 'advisers')
    console.log('adviser');
    $('.borrowers-content').hide();
    $('.advisers-content').show();
    $('#forAdviserButton').addClass('active');
    $('#forBorrowerButton').removeClass('active');
  else if(whom === 'borrowers')
    console.log('borrowers');
    $('.borrowers-content').show();
    $('.advisers-content').hide();
    $('#forAdviserButton').removeClass('active');
    $('#forBorrowerButton').addClass('active');
  //window.location.href = "#feature";
}
