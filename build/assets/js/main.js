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
});
//# sourceMappingURL=main.js.map
