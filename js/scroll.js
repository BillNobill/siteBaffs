$(window).scroll(function() { 
    var scroll = $(window).scrollTop();
 
    if (scroll > 0) {
        $('.menu').addClass('menu-auxiliar');
    } else {
        $('.menu').removeClass('menu-auxiliar');
    }
});