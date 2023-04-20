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

const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionBody = header.nextElementSibling;
    const isOpen = accordionBody.classList.contains('open');

    if (isOpen) {
      accordionBody.style.height = 0;
      accordionBody.classList.remove('open');
      header.classList.remove('open');
    } else {
      accordionBody.style.height = accordionBody.scrollHeight + 'px';
      accordionBody.classList.add('open');
      header.classList.add('open');
    }
  });
});
