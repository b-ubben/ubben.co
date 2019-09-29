const menuButton = document.querySelector('.nav__menu-button');
const closeButton = document.querySelector('.nav__close-button');
const navLinksList = document.querySelector('.nav__links-list');

function hideNav() {
  navLinksList.classList.remove('show', 'nav__links-list--expanded');
  navLinksList.classList.add('hidden');
}

function showNav() {
  navLinksList.classList.remove('hidden');
  navLinksList.classList.add('show', 'nav__links-list--expanded');
}

menuButton.addEventListener('click', e => showNav());
closeButton.addEventListener('click', e => hideNav());