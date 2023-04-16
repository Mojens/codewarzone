const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');
const exercisesLink = document.getElementById('exercises-link');

switch (window.location.pathname) {
  case '/':
    homeLink.classList.add('active');
    break;
  case '/about':
    aboutLink.classList.add('active');
    break;
  case '/contact':
    contactLink.classList.add('active');
    break;
  case '/exercises':
    exercisesLink.classList.add('active');
    break;
  default:
    break;
}
