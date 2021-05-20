const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section[id]');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show-menu');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('show-menu');
  });
});

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

// Add box-shadow after scrolling down
function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

// Show scroll-to-top icon
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  if (this.scrollY >= 560) {
    scrollTop.classList.add('scroll-top-show');
  } else {
    scrollTop.classList.remove('scroll-top-show');
  }
}

window.addEventListener('scroll', scrollTop);

const sr = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 2000,
  reset: true,
});

sr.reveal(
  '.home__text, .home__img, .about__text, .about__img, .offer__content, .flavor__content, .contact__data, .contact__button, .footer__content',
  {
    interval: 200,
  }
);
