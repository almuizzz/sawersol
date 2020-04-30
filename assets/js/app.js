// Slick Latest News
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});