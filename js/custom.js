// preloader
$(window).load(function() {
  //$('.preloader').fadeOut(10000); // set duration in brackets
  $('.preloader').fadeOut(3000); // Morgan 270516
  $('.feature-borrowers').hide()
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
  if(whom == 'adviser')
    $('.borrowers-content').hide()
    $('.advisers-content').show()
  if(whom == 'borrowers')
    $('.borrowers-content').show()
    $('.advisers-content').hide()
  window.location.href = "#feature";
  alert(whom)
}
