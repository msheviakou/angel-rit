$(function() {
    "use strict";

    if(!(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))) {
        $('#background-video').html('<video autoplay muted loop id="video-header"><source src="assets/img/video.mp4" type="video/mp4"></video>');
    }

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "")
            && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 72
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    let navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    navbarCollapse();

    $(window).scroll(navbarCollapse);
});
