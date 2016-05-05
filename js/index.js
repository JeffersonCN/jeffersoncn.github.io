$("document").ready(function() {
    var resizeSection = function () {
        var h = $(window).height();
        $(".view").css("min-height", h + "px");
    }

    resizeSection();

    $(window).on('resize', function () {
        resizeSection();
    });
    
    $("#btnHome").click(function() {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
    });
    $("#btnFolio").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });
    $("#btnContact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
    $("#btnAbout").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});