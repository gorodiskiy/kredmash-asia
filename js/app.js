$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href"),
        "250" <= $(window).scrollTop() && $(this).fadeIn("slow");
        var o = $(this);
        $(window).scroll(function() {
            $(window).scrollTop() <= "250" ? $(o).fadeOut("slow") : $(o).fadeIn("slow")
        }),
        $(this).click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop()
});