(function($) {
    var shopHome = new Swiper('#category-shop .swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        speed: 1500,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '#category-shop .swiper-button-next',
            prevEl: '#category-shop .swiper-button-prev',
            hideOnClick: true
        },
        spaceBetween: 22,
        breakpoints: {
            1600: {
                slidesPerView: 6.5,
            },
            1400: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 4.5,
            },
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3.5,
            },
            640: {
                slidesPerView: 3,
            },
            425: {
                slidesPerView: 2,
            },
            375: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    })
    var blogHome = new Swiper('#category-blog .swiper-container', {
        speed: 1500,
        spaceBetween: 22,
        breakpoints: {
            1600: {
                slidesPerView: 6.5,
            },
            1400: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 4.5,
            },
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3.5,
            },
            640: {
                slidesPerView: 3,
            },
            425: {
                slidesPerView: 1.5,
            },
            375: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    })
    /* Sticky menu */
    var position = $(window).scrollTop();
    var widthwd = $(window).width();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll === 0) {
            $('#header .main-header').removeClass('main-header--fixed');
            $('#header .main-header').removeClass('is-sticky');
        } else if (scroll > position) {
            $('#header .main-header').addClass('main-header--fixed');
            $('#header .main-header').removeClass('is-sticky');
        } else if (scroll < position) {
            $('#header .main-header').addClass('is-sticky');
        }
        position = scroll;
    });
    /*Scroll top*/
    var top = $('#scroll-top');
    $(window).scroll(function() {
        var act = $(window).scrollTop() > 300 ? 'addClass' : 'removeClass';
        top[act]('active');
    });
    top.click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})(jQuery);