/*

Template: Profyl - Personal Vcard Resume HTML Template
Author: iqonicthemes.in
Version: 1.0
Design and Developed by: iqonicthemes.in

NOTE:  This js include all script of template.

*/


/*=====================================================*/
/* Click to Scroll */
/*=====================================================*/

if ($(".iq-menu").length != 0) {

    // Sticky Menu
    $(".sticky").sticky({
        topSpacing: 0
    });

    // jQuery Smooth Scroll
    $('.page-scroll').on('click', function(event) {
        var $anchor = $(this),
            headerH = '100';
        $('html , body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });
}

$('.nav li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
});