$(document).ready(function() {
    var altura = $('.barra-de-acciones ').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.barra-de-acciones').addClass('menu-fixed');
        } else {
            $('.barra-de-acciones').removeClass('menu-fixed');
        }
    });

});