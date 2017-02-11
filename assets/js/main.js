(function() {
  $('.dropdown').on('click', function(e) {
    //when done it adds the open class to dropdown (ie. shows it eases in)
    $('.dropdown-menu').toggleClass('open');
  });
})();
