document.addEventListener("DOMContentLoaded", function() {
    $('.range').each(function() {
        let _min = $(this).data('min');
        let _max = $(this).data('max');
        let _step = $(this).data('step');

        $(this).slider({
            range: true,
            min: _min,
            max: _max,
            step: _step,
            values: [_max * 0.2, _max * 0.7],
        });
    })

    const swiper = new Swiper('.category-swiper', {
        slidesPerView: 1,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
	        renderFraction: function(a,b) {
	        	return '<span class="' + a + '"></span>' + '&nbsp;&nbsp;&mdash;&nbsp;&nbsp;' + '<span class="' + b + '"></span>';
	        }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});