$(document).ready(function () {
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.navbar-nav').toggleClass('acitve-nav');
        $('body').toggleClass('overflowNone')
    });

    var swiper = new Swiper(".prodcutDetailsThumbsSlider", {
        spaceBetween: 10,
        
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0:{
                slidesPerView: 2,
            },
            700:{
                slidesPerView: 2,
            },
            1050:{
                slidesPerView: 5,
            }
        }
    });
    var swiper2 = new Swiper(".prodcutDetailsSwiper", {
        spaceBetween: 10,
        loop: true,
        thumbs: {
            swiper: swiper,
        },
    });
});