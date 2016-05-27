// preloader
$(window).load(function() {
  $('.preloader').fadeOut(1000); // set duration in brackets
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
    window.location('www.socket.co.nz#feature?user=adviser')
  alert(whom)
}
