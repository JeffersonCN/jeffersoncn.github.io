var resizeSection = function () {
        var h = $(window).height();
        $(".view").css("min-height", h + "px"); 
    },
    scrollTo = function (target) {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    };

$(window).on('resize load', resizeSection());

$('.page-scroll').on('click', function () {
    var target = $(this).attr("goto");
    scrollTo(target);
});