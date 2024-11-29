(function () {
  "use strict";

  /**
   * Preloader Removal
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector(".header-toggle");
  if (headerToggleBtn) {
    function headerToggle() {
      document.querySelector("#header").classList.toggle("header-show");
      headerToggleBtn.classList.toggle("bi-list");
      headerToggleBtn.classList.toggle("bi-x");
    }
    headerToggleBtn.addEventListener("click", headerToggle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".header-show")) {
        headerToggle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    function toggleScrollTop() {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }

    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);
  }

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector(".typed");
  if (selectTyped) {
    let typedStrings = selectTyped.getAttribute("data-typed-items");
    typedStrings = typedStrings.split(",");
    new Typed(".typed", {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  /**
   * Animate the skills items on reveal
   */
  const skillsAnimation = document.querySelectorAll(".skills-animation");
  if (skillsAnimation) {
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: "80%",
        handler: function () {
          const progress = item.querySelectorAll(".progress .progress-bar");
          progress.forEach((el) => {
            el.style.width = el.getAttribute("aria-valuenow") + "%";
          });
        },
      });
    });
  }

  /**
   * Navmenu Scrollspy
   */
  const navMenuLinks = document.querySelectorAll(".navmenu a");
  function navmenuScrollspy() {
    navMenuLinks.forEach((navmenuLink) => {
      if (!navmenuLink.hash) return;
      const section = document.querySelector(navmenuLink.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenuLink.classList.add("active");
      } else {
        navmenuLink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  /**
   * Toggle content (Piolo section)
   */
  let isOriginalPiolo = true;
  function toggleContentPiolo() {
    const container = document.getElementById("Piolo");
    if (!container) return;

    container.classList.add("fade");
    setTimeout(() => {
      container.innerHTML = isOriginalPiolo
        ? `
          <div class="profile-img">
            <img src="assets/img/my-profile-img.jpg" alt="Profile Image" class="img-fluid rounded-circle">
          </div>
          <a href="index.html" class="logo d-flex align-items-center justify-content-center">
            <h1 class="sitename">Jake Moises Morales</h1>
          </a>
          <div class="social-links text-center">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/jxkesui" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          </div>
        `
        : `
          <div class="profile-img">
            <img src="assets/img/my-profile-img.jpg" alt="Profile Image" class="img-fluid rounded-circle">
          </div>
          <a href="index.html" class="logo d-flex align-items-center justify-content-center">
            <h1 class="sitename">Mark Piolo Morente</h1>
          </a>
          <div class="social-links text-center">
            <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
            <a href="https://www.facebook.com/markpiolo.morentw" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/kyoujin.mp/profilecard/?igsh=MTVucTNkOXc1N2l6dw==" class="instagram"><i class="bi bi-instagram"></i></a>
          </div>
        `;

      setTimeout(() => container.classList.remove("fade"), 1000);
      isOriginalPiolo = !isOriginalPiolo;
    }, 1000);
  }
  setInterval(toggleContentPiolo, 6000);

  /**
   * Toggle content (About section)
   */
  let isOriginalAbout = true;
  function toggleContentAbout() {
    const container = document.getElementById("About");
    if (!container) return;

    container.classList.add("fade");
    setTimeout(() => {
      container.innerHTML = isOriginalAbout
        ? `<div class="container section-title" data-aos="fade-up">...Mark Piolo Content...</div>`
        : `<div class="container section-title" data-aos="fade-up">...Jake Moises Content...</div>`;

      setTimeout(() => container.classList.remove("fade"), 1000);
      isOriginalAbout = !isOriginalAbout;
    }, 1000);
  }
  setInterval(toggleContentAbout, 6000);
})();
