(function($) {
    var shopHome = new Swiper('#category-shop .swiper-container', {
        loop: true,
        speed: 0,
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
    });
    var blogHome = new Swiper('#category-blog .swiper-container', {
        speed: 0,
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
    });
    var blogBlog = new Swiper('#blog-page .swiper-container', {
        loop: true,
        speed: 0,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '#blog-page .swiper-button-next',
            prevEl: '#blog-page .swiper-button-prev',
            hideOnClick: true
        },
        spaceBetween: 22,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 2.5,
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
    });
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
    /* Scroll top */
    var top = $('#scroll-top');
    $(window).scroll(function() {
        var act = $(window).scrollTop() > 300 ? 'addClass' : 'removeClass';
        top[act]('active');
    });
    top.click(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    /* Menu sidebar */
    $('#button-menu').click(function() {
        $("#sidebar").addClass("active", 500);
        $("#overlay").addClass("active", 500);
        $("body").css("overflow", "hidden");
    })
    $('#button-menu-mobile').click(function() {
        $("#sidebar").addClass("active", 500);
        $("#overlay").addClass("active", 500);
        $("body").css("overflow", "hidden");
    })
    /* Close sidebar by button */
    $('#close-sidebar').click(function() {
        $("#sidebar").removeClass("active");
        $("#overlay").removeClass("active");
        $("body").css("overflow", "visible");
    })
    $(window).on('click', function(e) {
        if ($(e.target).is('#overlay')) {
            $("#sidebar").removeClass("active");
            $("#overlay").removeClass("active");
            $("body").css("overflow", "visible");
        }
    });
    $('.products .grid-column__item__info__variations-property__color').hover(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    })
})(jQuery);