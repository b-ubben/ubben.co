const menuButton  = document.querySelector('.nav__menu-button');
const closeButton = document.querySelector('.nav__close-button');
const navLinksList = document.querySelector('.nav__links-list');
const container = document.querySelector('.container');


function hideNav() {
  navLinksList.classList.remove('show', 'nav__links-list--expanded');
}

function showNav() {
  navLinksList.classList.add('show', 'nav__links-list--expanded');
}

menuButton.addEventListener('click', e => {
  showNav();
});

closeButton.addEventListener('click', e => {
  hideNav();
});

window.addEventListener('resize', e => {
  container.clientWidth > 768 && navLinksList.classList.remove('hidden');
});
