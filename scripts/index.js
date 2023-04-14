const buttonCloseAdd = document.querySelector('.header__action-button');
const addBanner = document.querySelector('.header__action');

buttonCloseAdd.addEventListener('click', () => {
  addBanner.style.display = 'none';
});

const burgerButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu-list');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  burgerMenu.classList.toggle('open');
});
