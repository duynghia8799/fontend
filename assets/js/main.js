(function($) {
    var shopHome = new Swiper('#category-shop .swiper-container', {
        loop: true,
        speed: 0,
        scrollbar: {
            el: '#category-shop .swiper-scrollbar',
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
            el: '#blog-page .swiper-scrollbar',
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
    var similarProduct = new Swiper('#product-detail-page .similar-product .swiper-container', {
        loop: true,
        speed: 0,
        scrollbar: {
            el: '#product-detail-page .similar-product .swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '#product-detail-page .similar-product .swiper-button-next',
            prevEl: '#product-detail-page .similar-product .swiper-button-prev',
            hideOnClick: true
        },
        spaceBetween: 22,
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 3.5,
            },
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
            }
        },
    });
    var otherProduct = new Swiper('#product-detail-page .product-others .swiper-container', {
        loop: true,
        speed: 0,
        scrollbar: {
            el: '#product-detail-page .product-others .swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '#product-detail-page .product-others .swiper-button-next',
            prevEl: '#product-detail-page .product-others .swiper-button-prev',
            hideOnClick: true
        },
        spaceBetween: 22,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
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
    var moreProduct = new Swiper('#product-detail-page .product-more .swiper-container', {
        loop: true,
        speed: 0,
        scrollbar: {
            el: '#product-detail-page .product-more .swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '#product-detail-page .product-more .swiper-button-next',
            prevEl: '#product-detail-page .product-more .swiper-button-prev',
            hideOnClick: true
        },
        spaceBetween: 22,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
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
            $('header').removeClass('fixed');
            $('header').removeClass('is-sticky');
        } else if (scroll > position) {
            $('header').addClass('fixed');
            $('header').removeClass('is-sticky');
        } else if (scroll < position) {
            $('header').addClass('is-sticky');
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
    /* Sidebar product */
    $('.product-detail__content-property .collapse-style .collapse-style__event-name').each(function() {
        $(this).click(function() {
            $("#sidebar-product").addClass("active", 500);
            $("#overlay").addClass("active", 500);
            $("body").css("overflow", "hidden");
        })
    })
    /* Close sidebar by button */
    $('#close-sidebar').click(function() {
        $("#sidebar").removeClass("active");
        $("#overlay").removeClass("active");
        $("body").css("overflow", "visible");
    })
    $('#close-sidebar-product').click(function() {
        $("#sidebar-product").removeClass("active");
        $("#overlay").removeClass("active");
        $("body").css("overflow", "visible");
    })
    /* Close all sidebar */
    $(window).on('click', function(e) {
        if ($(e.target).is('#overlay')) {
            $("#overlay").removeClass("active");
            $("#sidebar").removeClass("active");
            $("#sidebar-product").removeClass("active");
            $("body").css("overflow", "visible");
        }
    });
   
})(jQuery);