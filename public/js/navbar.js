document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

$(document).ready(function() {
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() <= 400) {
            $('#weatherDash').insertBefore('#weatherDashContent');
            $('#passGen').insertBefore('#passGenContent');
            $('.right-align').removeClass('right-align');
            $('#aboutMe').removeAttr('data-aos');
            $('#work').removeAttr('data-aos');
            $('#contact').removeAttr('data-aos');
            $('#home').removeClass('valign-wrapper');
            $('.mobileShift').removeAttr('font-size').css('font-size','25px');
            $('.responsive-img').removeAttr('width').removeAttr('min-width').css('min-width','100%').removeAttr('margin');
            $('#home').addClass('left-align').css('padding','15px');
        } else {
            
        }
    }).resize();
});