// Sticky Navbar Functionality
window.onscroll = function () {
  var navbar = document.querySelector('.navc');
  if (navbar) { // Ensure navbar exists
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      navbar.classList.add('fixed-top'); // Add the fixed class on scroll
    } else {
      navbar.classList.remove('fixed-top'); // Remove when scrolled back up
    }
  }
};

// Modal Open and Close Functions
function openModal() {
  var modal = document.getElementById("modal");
  var backdrop = document.getElementById("backdrop");
  if (modal && backdrop) { // Ensure modal and backdrop exist
    modal.classList.add("show");
    backdrop.classList.add("show");
  }
}

function closeModal() {
  var modal = document.getElementById("modal");
  var backdrop = document.getElementById("backdrop");
  if (modal && backdrop) { // Ensure modal and backdrop exist
    modal.classList.remove("show");
    backdrop.classList.remove("show");
  }
}
