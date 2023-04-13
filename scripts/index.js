$('.reviews__slider').slick({
  centerMode: true,
  centerPadding: '160px',
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        arrows: true,
        autoplay: false,
        infinite: false,
      }
    },
    {
      breakpoint: 905,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        infinite: false,
      }
    }
  ]
});

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
