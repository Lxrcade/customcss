window.onscroll = function() {
  var navbar = document.querySelector('.navc');
  var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add('fixed-top');  // Add the fixed class on scroll
  } else {
    navbar.classList.remove('fixed-top');  // Remove when scrolled back up
  }
};
