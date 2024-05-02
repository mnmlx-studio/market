'use strict';

document.addEventListener("DOMContentLoaded", function () {
    $('.range').each(function () {
        var _min = $(this).data('min');
        var _max = $(this).data('max');
        var _step = $(this).data('step');

        $(this).slider({
            range: true,
            min: _min,
            max: _max,
            step: _step,
            values: [_max * 0.2, _max * 0.7]
        });
    });

    var swiper = new Swiper('.category-swiper', {
        slidesPerView: 1,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            renderFraction: function renderFraction(a, b) {
                return '<span class="' + a + '"></span>' + '&nbsp;&nbsp;&mdash;&nbsp;&nbsp;' + '<span class="' + b + '"></span>';
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    var event = new CustomEvent("dialog-show", {
        bubbles: true
    });

    $("[data-toggle='dialog']").on('click', function () {
        var _target = $(this).data('target');
        $('.dialog#' + _target).toggleClass('show');

        catalog.dispatchEvent(event);

        return false;
    });

    $("body").on('click', ".dialog-backdrop", function () {
        $(this).closest('.dialog').removeClass('show');
        return false;
    });

    $("body").on('click', ".dialog-close", function () {
        $(this).closest('.dialog').removeClass('show');
        return false;
    });

    $("[data-toggle='nav']").on('click', function () {
        var _target = $(this).data('target');

        $("[data-toggle='nav']").removeClass('active');
        $(this).addClass('active');

        $('.nav-pane').removeClass('active');
        $('.nav-pane#' + _target).addClass('active');

        return false;
    });

    $("[data-toggle='spoiler']").on('click', function () {
        var _target = $(this).data('target');

        $("[data-toggle='spoiler']").removeClass('active');
        $(this).addClass('active');

        $('.spoiler-pane').removeClass('active');
        $('.spoiler-pane#' + _target).addClass('active');

        return false;
    });
});
//# sourceMappingURL=main.js.map
