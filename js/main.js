


if ($(window).width() < 768) {
  $('.testimonials-list').not('.slick-slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17L1 9.21837L8 1.43674M17 9.21837L1 9.21837L17 9.21837Z" stroke="#B22532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L17 8.78163L10 16.5633M0.999999 8.78163L17 8.78163L0.999999 8.78163Z" stroke="#B22532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

  });

  $('.features-list').not('.slick-slider').slick({
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17L1 9.21837L8 1.43674M17 9.21837L1 9.21837L17 9.21837Z" stroke="#B22532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L17 8.78163L10 16.5633M0.999999 8.78163L17 8.78163L0.999999 8.78163Z" stroke="#B22532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

  })

};

$('.burger').on('click', function(event) {
  $('.burger, .header-menu, .header-buttons').toggleClass('open');
});





//////

let isLoad = true;

$(document).ready(function() {
    setTimeout(function() {
        initStart();
    }, 3000)

    $('.phone').mask('+38(099) 999-99-99');

    $('.tab-menu li').on('click', function() {
        $(this).toggleClass('active').siblings().removeClass('active');
        $(this).closest('.tab').children('.tab-content').children('.tab-item').hide().removeClass('open').eq($(this).index()).show().addClass('open')
    })



    $('.accordion-item').on('click', function() {
        // $('.accordion-item.active').removeClass('active');
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    // $('.advantages-terraces .accordion-item').on('click', function () {
    //   //debugger
    //
    //   if ($(this).hasClass('active')) {
    //     $('.advantages-terraces .accordion-item').removeClass('active');
    //   } else {
    //     $('.advantages-terraces .accordion-item').removeClass('active');
    //     $(this).addClass('active');
    //   }
    // })

    $(".advantages-terraces .accordion-item").on('click', function(event) {
        // debugger

        $(".advantages-terraces .accordion-item").not($(event.currentTarget)).removeClass("active");
        $(event.currentTarget).toggleClass("active");

    });

    $('.articles-list .btn-more').on('click', function() {
        $(this).closest('.wrapper').find('.not-visible').slideToggle().toggleClass('hidden');
        $(this).toggleClass('active').text($(this).hasClass('active') ? 'Скрыть' : 'Больше статей');
        return false
    });
    $('.portfolio .btn-more').on('click', function() {
        $(this).closest('.wrapper').find('.not-visible').slideToggle().toggleClass('hidden flex');
        $(this).toggleClass('active').text($(this).hasClass('active') ? 'Скрыть' : 'Больше проектов');
        return false
    })

    $('select').select2();

    handlerCalc();

});

$(window).scroll(function() {
    initStart();
    if ($(window).scrollTop() > $(window).height()) {
        $('.btn-fixed').show();
    } else {
        $('.btn-fixed').hide();
    }
})

function handlerCalc() {
    $('.js-next').on('click', function() {
        $(this).closest('.step').hide().next().show();
        return false
    })
    $('.js-back').on('click', function() {
        $(this).closest('.step').hide().prev().show();
        return false
    })



    jQuery('.js-calc').on('click', function() {
        let obj = {
            type0: jQuery('.steps').find('[name="step-1"]:checked').val(),
            type1: jQuery('.steps').find('[name="step-2"]:checked').val(),
            width: jQuery('.steps').find('[name="width"]').val(),
            height: jQuery('.steps').find('[name="height"]').val(),
            name: jQuery('.steps').find('[name="name"]').val(),
            phone: jQuery('.steps').find('[name="phone"]').val(),
        }

        let cash = "индивидуальный расчёт";
        $.each(tableCashGlobal[obj.type1], function(i, item) {
            if (!!item[obj.width]) {
                if (!!item[obj.width][obj.height]) {
                    cash = item[obj.width][obj.height];
                    $('.js-result').text(item[obj.width][obj.height])
                    $('.js-size-1').text((obj.width / 1000).toFixed(2) + " х " + (obj.height / 1000).toFixed(2) + " м ")
                    $('.js-size-2').text(((obj.width * obj.height) / 1000000).toFixed(2))
                }
            }
        })

        $(this).closest('.step').hide().next().show();

        return false

    })
}

function initSlick() {
    $('.carousel-main').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-3.27837e-07 7.50003C-3.20215e-07 7.32566 0.0651657 7.15111 0.195331 7.01799L6.86196 0.199815C7.12246 -0.066605 7.54429 -0.066605 7.80463 0.199815C8.06496 0.466235 8.06512 0.897655 7.80463 1.1639L1.60932 7.50003L7.80463 13.8362C8.06512 14.1026 8.06512 14.534 7.80463 14.8002C7.54413 15.0665 7.1223 15.0667 6.86196 14.8002L0.195331 7.98208C0.0651657 7.84895 -3.35459e-07 7.67441 -3.27837e-07 7.50003Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 7.49997C8 7.67434 7.93483 7.84889 7.80467 7.98201L1.13804 14.8002C0.877537 15.0666 0.455706 15.0666 0.195374 14.8002C-0.064958 14.5338 -0.0651246 14.1023 0.195374 13.8361L6.39068 7.49997L0.195374 1.16384C-0.0651245 0.897422 -0.0651245 0.466001 0.195374 0.199751C0.455873 -0.0664988 0.877704 -0.0666685 1.13804 0.199751L7.80467 7.01792C7.93483 7.15105 8 7.32559 8 7.49997Z" fill="white"/></svg></button>',

    });
    $('.developments-carousel').slick({
        infinite: false,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5L21 4.5L21 3.5L1 3.5L1 4.5Z" fill="#14326D"/></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269206 16.6597 0.269206 16.4645 0.464468C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM-4.81459e-08 4.5L20 4.5L20 3.5L4.81459e-08 3.5L-4.81459e-08 4.5Z" fill="#14326D"></svg></button>',
        responsive: [{
                breakpoint: 1570,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,

                }
            },
        ]
    });
    $('.carousel-articles').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5L21 4.5L21 3.5L1 3.5L1 4.5Z" fill="#14326D"/></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269206 16.6597 0.269206 16.4645 0.464468C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM-4.81459e-08 4.5L20 4.5L20 3.5L4.81459e-08 3.5L-4.81459e-08 4.5Z" fill="#14326D"></svg></button>',

    });
    $('.carousel-cooperation').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-3.27837e-07 7.50003C-3.20215e-07 7.32566 0.0651657 7.15111 0.195331 7.01799L6.86196 0.199815C7.12246 -0.066605 7.54429 -0.066605 7.80463 0.199815C8.06496 0.466235 8.06512 0.897655 7.80463 1.1639L1.60932 7.50003L7.80463 13.8362C8.06512 14.1026 8.06512 14.534 7.80463 14.8002C7.54413 15.0665 7.1223 15.0667 6.86196 14.8002L0.195331 7.98208C0.0651657 7.84895 -3.35459e-07 7.67441 -3.27837e-07 7.50003Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 7.49997C8 7.67434 7.93483 7.84889 7.80467 7.98201L1.13804 14.8002C0.877537 15.0666 0.455706 15.0666 0.195374 14.8002C-0.064958 14.5338 -0.0651246 14.1023 0.195374 13.8361L6.39068 7.49997L0.195374 1.16384C-0.0651245 0.897422 -0.0651245 0.466001 0.195374 0.199751C0.455873 -0.0664988 0.877704 -0.0666685 1.13804 0.199751L7.80467 7.01792C7.93483 7.15105 8 7.32559 8 7.49997Z" fill="white"/></svg></button>',
    });

    $('.carousel-main').on('afterChange', function(d1, d2, d3) {
        $('.carousel-main + .masthead_counter .counter-active').text(d2.currentSlide < 10 ? '0' + (d2.currentSlide + 1) : (d2.currentSlide + 1));
    })

    $('.banner-top').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        prevArrow: false,
        nextArrow: false,
        speed: 5000,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.banner-bottom').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 8000,
        prevArrow: false,
        nextArrow: false,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    if ($(window).width() < 768) {
        $('.in-advantages').not('.slick-slider').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5L21 4.5L21 3.5L1 3.5L1 4.5Z" fill="#14326D"/></svg></button>',
            nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269206 16.6597 0.269206 16.4645 0.464468C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM-4.81459e-08 4.5L20 4.5L20 3.5L4.81459e-08 3.5L-4.81459e-08 4.5Z" fill="#14326D"></svg></button>',

        })
        $('.steps-list ul').not('.slick-slider').slick({
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: 0,
            prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5L21 4.5L21 3.5L1 3.5L1 4.5Z" fill="#14326D"/></svg></button>',
            nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269206 16.6597 0.269206 16.4645 0.464468C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM-4.81459e-08 4.5L20 4.5L20 3.5L4.81459e-08 3.5L-4.81459e-08 4.5Z" fill="#14326D"></svg></button>',

        })
    }
}

function initStart() {
    if (isLoad) {
        console.log('isLoad');
        initLazy();
        initSlick();
    }

    isLoad = false

}

function initLazy() {
    $('[data-src]').each(function() {
        $(this).attr('src', $(this).data('src'));
    })
}



// Меню бургер
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu-list').toggleClass('active');
    });
});

// Анимация WOW
var wow = new WOW({
    mobile: false,

});
wow.init();

//Аккордион
$(function() {
    $('.accordeon-item').on('click', function() {
        $(this).toggleClass('active').siblings().removeClass('active')
    });
});

//Табы
$('.tab-menu li').on('click', function() {
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).closest('.tab').children('.tab-content').children('.tab-item').hide().removeClass('open').eq($(this).index()).show().addClass('open')
})




//Скролл меню
$('.menu a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 90
    }, {
        duration: 2000,
        easing: 'swing'
    });
    return false;
});

//инпут
$('.form-item input').on('keyup', function() {
    if ($(this).val().length > 0) {
        $(this).parent().addClass('active');
        $(this).closest('form').find('.btn-main').prop('disabled', false);
        //$('.form-item .btn-main').removeAttr('disabled');
    } else {
        $(this).parent().removeClass('active');
        //$('.form-item .btn-main').prop('disabled', true);
        $(this).closest('form').find('.btn-main').prop('disabled', true);

    }
});
