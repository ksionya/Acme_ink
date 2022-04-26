
function mobileCarousel() {
  if ($(window).width() >= 1025) {
    $('.features-list.slick-slider').slick('unslick');
  }
  if ($(window).width() >= 769) {
    $('.testimonials-list.slick-slider').slick('unslick');
  }
  if ($(window).width() <= 768) {
    $('.testimonials-list').not('.slick-slider').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      dots: true,
      prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17L1 9.21837L8 1.43674M17 9.21837L1 9.21837L17 9.21837Z" stroke="#B22532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L17 8.78163L10 16.5633M0.999999 8.78163L17 8.78163L0.999999 8.78163Z" stroke="#B22532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

    });

  };

  if ($(window).width() < 1024) {
    $('.features-list').not('.slick-slider').slick({
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      dots: true,
      prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17L1 9.21837L8 1.43674M17 9.21837L1 9.21837L17 9.21837Z" stroke="#B22532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L17 8.78163L10 16.5633M0.999999 8.78163L17 8.78163L0.999999 8.78163Z" stroke="#B22532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

    })
  }

}

function mobileMenu() {
  $('.burger').on('click', function(event) {
    $('.burger, .header').toggleClass('open');
    $('body').toggleClass('js-noscroll');
  });
  $('body').on('click', function(e) {
    if ($(e.target).hasClass('header')) {
      $('.burger').removeClass('open');
      $('.header').removeClass('open');
      $('body').removeClass('js-noscroll');
    }

  })
}

$(document).ready(function () {
  mobileCarousel();
  mobileMenu();
});
$(window).resize(function () {
  mobileCarousel();
});


