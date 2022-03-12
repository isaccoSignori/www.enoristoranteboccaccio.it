function lazy_load(t) {
    t.data("src") && (t.attr("src", t.data("src")), t.removeAttr("data-src"));
}
function lazy_load_carousel() {
    $("#sliderBoccaccio").bind("slide.bs.carousel", function (t) {
        lazy_load($(t.relatedTarget).find("img[data-src]"));
    });
}
$(document).ready(function () {
    let t = $("a[id^='lista-']"),
        o = document.getElementsByClassName("scrollEffect");
    !(function () {
        let t = new Date().getDay();
        $(".settimana tr[data-giorno='" + t + "']").addClass("today");
    })(),
        setTimeout(function () {
            "true" !== $(".arrow").attr("scrolled") && $(".arrow").show();
        }, 5e3),
        $(function () {
            var t = $(".navbar-collapse");
            t.on("click", "a:not([data-toggle])", null, function () {
                t.collapse("hide");
            });
        });
    function a(t) {
        return t * Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }
    t.each(function () {
        let t = $(this),
            o = t.attr("id").split("-")[1];
        t.click(function () {
            $("html, body").animate({ scrollTop: $("#sezione-" + o).offset().top - 20 });
        });
    }),
        (window.onscroll = function () {
            $(".iubenda-cs-container").length > 0 ? $(".footer-middle").css({ "padding-bottom": "170px" }) : $(".footer-middle").css({ "padding-bottom": "0" }),
                (function () {
                    let t = document.body.scrollTop || document.documentElement.scrollTop,
                        e = document.documentElement.scrollHeight - document.documentElement.clientHeight,
                        n = $(".home").height();
                    $("#progBar1").attr("style", "transform:scaleX(" + t / e + ")"),
                        t >= a(1)
                            ? ($("button.navbar-toggler").removeClass("nascosto"),
                              $("#progBar").attr("style", "transform:scaleX(" + t / e + ")"),
                              $(".all").css({ position: "unset", "z-index": "10", "margin-top": "-100vh" }),
                              $(".paragrafo,.slider-foto").css({ opacity: 1 }),
                              $(".toHide").hide(),
                              $(".arrow").attr("scrolled", "true").hide())
                            : ($("button.navbar-toggler").addClass("nascosto"),
                              $(".all").css({ position: "fixed", "z-index": "2", "margin-top": "0" }),
                              $(".navbar-collapse").collapse("hide"),
                              $(".animate").removeClass("animate"),
                              $(".paragrafo,.slider-foto").css({ opacity: t / a(1) }),
                              $(".toHide").show());
                    let l = 1 - t / n > 0 ? "rgba(0, 0, 0," + (1 - t / n) + ")" : "#fff";
                    $("header").attr("style", "background-color:" + l),
                        $(".main").attr("style", "background-color:" + l),
                        Array.prototype.forEach.call(o, function (o) {
                            !(function (t, o) {
                                let e = window.pageYOffset || t.scrollTop;
                                const n = t.getBoundingClientRect().top + e - a(1);
                                n > 0 && n < o && t.classList.add("animate");
                            })(o, t);
                        });
                })(),
                (function () {
                    let t = $(this).scrollTop();
                    $("section").each(function () {
                        let o = $(this),
                            a = o.attr("id").split("-")[1];
                        parseInt(a) > 0 &&
                            (t + 50 > $(this).offset().top && t <= $(this).offset().top + $(this).height() ? $("#lista-" + a).addClass("active") : ("5" === a && t + 50 > $(this).offset().top) || $("#lista-" + a).removeClass("active"));
                    });
                })();
        });
}),
    (window.onload = function () {
        lazy_load($("#primo-slide")), lazy_load($("#sala")), lazy_load($("#vino")), lazy_load($("#decamerone")), lazy_load_carousel();
    });
