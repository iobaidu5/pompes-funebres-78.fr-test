$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
});

const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', fixNav);

    new BeerSlider(document.getElementById('slider'));

    $.fn.BeerSlider = function (options) {
        options = options || {};
        return this.each(function () {
            new BeerSlider(this, options);
        });
    };
    $('.beer-slider').BeerSlider({
        start: 50
    });

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});