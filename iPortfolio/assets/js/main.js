/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  let isOriginal = true; // Track whether we're showing the original content

  function toggleContent() {
    const container = document.getElementById("Piolo");

    // Apply fade-out effect
    container.classList.add('fade');

    // After the fade-out transition (1 second), change the content
    setTimeout(() => {
      if (isOriginal) {
        // Set the new content
        container.innerHTML = `
          <div class="profile-img">
            <img src="assets/img/Jake.jpg" alt="Profile Image" class="img-fluid rounded-circle">
          </div>

          <a href="index.html" class="logo d-flex align-items-center justify-content-center">
            <h1 class="sitename">Jake Moises Morales</h1>
          </a>

          <div class="social-links text-center">
            <a href="https://x.com/jxkesui" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/jxkesui" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/jxkesui/" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
          </div>
        `;
      } else {
        // Revert to the original content
        container.innerHTML = `
          <div class="profile-img">
            <img src="assets/img/Piolo.jpg" alt="Profile Image" class="img-fluid rounded-circle">
          </div>

          <a href="index.html" class="logo d-flex align-items-center justify-content-center">
            <h1 class="sitename">Mark Piolo Morente</h1>
          </a>

          <div class="social-links text-center">
            <a href="https://x.com/abcde_qwert0?t=HNLdXvRT9f9tZMy5-Uyb3Q&s=09" target="_blank" class="twitter"><i class="bi bi-twitter-x"></i></a>
            <a href="https://www.facebook.com/markpiolo.morentw" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/kyoujin.mp/profilecard/?igsh=MTVucTNkOXc1N2l6dw==" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
          </div>
        `;
      }

      // Remove fade-out class after 1 second to start the next fade-in
      setTimeout(() => {
        container.classList.remove('fade');
      }, 1000); // Same duration as fade-out

      // Toggle the state
      isOriginal = !isOriginal;
  }, 1000); // Same duration as fade-out
}

  // Wait until the page is fully loaded before starting the auto-content change
  window.addEventListener('load', () => {
    // Change content every 6 seconds (6000 milliseconds)
    setInterval(toggleContent, 15000);
  });



  //About

const preloader1 = document.querySelector('#preloader1');
  if (preloader1) {
    window.addEventListener('load', () => {
      preloader1.remove();
    });
  }

  let isOriginal1 = true; // Track whether we're showing the original content

  function toggleContent1() {
    const container1 = document.getElementById("Abouts");

    // Apply fade-out effect
    container1.classList.add('fade');

    // After the fade-out transition (1 second), change the content
    setTimeout(() => {
      if (isOriginal1) {
        // Set the new content
        container1.innerHTML = `
         <div id="Abouts">
    <section id="about" class="about section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>About</h2>

        <p> I am a dedicated second-year student pursuing a Bachelor of Science in Information and Communications Technology at Nueva Ecija University of Science and Technology, Sumacab Campus. My passion for technology, ignited during high school, drives me to pursue a career in IT. Outside academics, I enjoy playing video games, traveling, and driving, which help me relax and improve my focus. </p> <p> As an aspiring programmer, I am excited to embark on a journey of innovation, problem-solving, and creativity. Programming empowers me to transform ideas into reality while continuously exploring and learning new technologies. I strive to master coding languages, design efficient algorithms, and develop impactful applications. With determination and a deep passion for technology, I am ready to overcome challenges, embrace growth, and contribute to shaping the future through programming. </p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <img src="assets/img/ja.jpg" class="img-fluid" alt="Piolo">
          </div>
          <div class="col-lg-8 content">
            <h2>Jake Moises Morales</h2>
            <p class="fst-italic py-3">
              Personal Information
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>April 1, 2005</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+63 960-881-7763</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Peñaranda</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>19</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>moralesjake930@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <h2>Hobbies</h2>
        <p>I love Traveling, Playing video games, Driving and currently learning about engines</p>
          </div>
        </div>

    </section><!-- /About Section -->
  </div>

        </div>

      </div>


        `;
      } else {
        // Revert to the original content
        container1.innerHTML = `
        


      <div id="Abouts">
    <section id="about" class="about section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>About</h2>

        <p>
                I am a motivated second-year student pursuing a Bachelor of Science in Information and Communications Technology at Nueva Ecija University of Science and Technology, Sumacab Campus. My interest in technology, sparked in high school, drives my pursuit of a career in IT. Outside academics, I enjoy playing musical instruments, basketball, and mobile games, fostering creativity and skill development.
            </p>
            <p>
                As a future programmer, I am excited to embark on a journey of creativity, problem-solving, and innovation. Programming empowers me to turn ideas into reality, and continuously learn new technologies. I aspire to master coding languages, design efficient algorithms, and develop applications. With determination and a passion for technology, I am ready to face challenges, embrace growth, and contribute to shaping the future through programming.
            </p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <img src="assets/img/Pi.jpg" class="img-fluid" alt="Piolo">
          </div>
          <div class="col-lg-8 content">
            <h2>Mark Piolo Morente</h2>
            <p class="fst-italic py-3">
              Personal Information
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>July 7, 2004</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+63967-849-3459</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Penaranda</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>morentemarkypiolo@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <h2>Hobbies</h2>
            <p class="py-3">
              I like playing basketball, chess, musical instruments, mobile games
              
            </p>
          </div>
        </div>

    </section><!-- /About Section -->
  </div>

        </div>

      </div>


        `;
      }

      // Remove fade-out class after 1 second to start the next fade-in
      setTimeout(() => {
        container1.classList.remove('fade');
      }, 1000); // Same duration as fade-out

      // Toggle the state
      isOriginal1 = !isOriginal1;
  }, 1000); // Same duration as fade-out
}

  // Wait until the page is fully loaded before starting the auto-content change
  window.addEventListener('load', () => {
    // Change content every 6 seconds (6000 milliseconds)
    setInterval(toggleContent1, 15000);
  });

