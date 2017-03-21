! function($) {
    "use strict";
    if ($(document).on("click", ".js-open-modal", function(o) {
            o.preventDefault();
            var a = $(this).data("target");
            $("." + a).addClass("modal--on")
        }), $(document).on("click", ".js-close-modal", function(o) {
            o.preventDefault(), $(".modal").removeClass("modal--on")
        }), $(".domains__carousel").length) {
        var o = $(".domains__carousel");
        o.owlCarousel({
            loop: !0,
            mouseDrag: !1,
            touchDrag: !1,
            pullDrag: !1,
            dots: !1,
            autoplay: !0,
            autoplayTimeout: 2e3,
            center: !0,
            autoWidth: !0
        }), o.trigger("stop.owl.autoplay");
        var a = o.offset(),
            t = a.top - 500;
        $(window).on("scroll", function() {
            var a = $(window).scrollTop();
            a > t && (o.trigger("play.owl.autoplay", [2e3, 400]), $(window).off("scroll"))
        })
    }
    $(document).on("click", ".js-packages", function(o) {
        o.preventDefault();
        var a = $(".pricing-col").offset().top - 100;
        $("body,html").animate({
            scrollTop: a
        }, 400)
    })
}(jQuery);