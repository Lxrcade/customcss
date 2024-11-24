window.onscroll = function() {
  var navbar = document.querySelector('.navc');
  var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add('fixed-top');  // Add the fixed class on scroll
  } else {
    navbar.classList.remove('fixed-top');  // Remove when scrolled back up
  }
};

  // JavaScript to Open and Close the Modal
    function openModal() {
      document.getElementById("modal").classList.add("show");
      document.getElementById("backdrop").classList.add("show");
    }

    function closeModal() {
      document.getElementById("modal").classList.remove("show");
      document.getElementById("backdrop").classList.remove("show");
    }
