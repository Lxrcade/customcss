<script>
let lastScrollTop = 0; // Variable to keep track of the last scroll position
const nav = document.querySelector('.navc'); // Select the navigation bar

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        nav.style.top = "-100px"; // Hide the navbar
    } else {
        // Scrolling up
        nav.style.top = "0"; // Show the navbar
    }
    lastScrollTop = scrollTop; // Update last scroll position
});
</script>
