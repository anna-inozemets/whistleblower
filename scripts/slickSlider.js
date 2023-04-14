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
