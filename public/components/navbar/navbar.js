const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');

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
  default:
    break;
}
