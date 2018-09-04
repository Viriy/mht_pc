$(function() {
    /*to top*/
    var ws = $(window).scrollTop();
    var onePage = $(window).height();
    $(window).scroll(function() {
        var ws = $(window).scrollTop();
        var top = $(".to_top");
        ws > onePage ? 'ws>' + onePage + ',' + top.fadeIn().css("display", "block") : top.fadeOut();
    })
    var $top = parseInt($(window).scrollTop() / $(window).height()) + 1;
    $(".to_top").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500 * $top)
    })

    var nav = $(".aside_nav");
    var navHeight = $(".aside_nav").height();
    var screen_w = screen.width;
    var screen_h = $(window).height();
    var scrollTop = $(window).scrollTop();
    navbot()
    if (screen_w > 200) { nav.show(); }
    $(window).scroll(function() {
        navbot()
    });
    function navbot(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > screen_h) {
            nav.stop().animate({ top: scrollTop + screen_h - navHeight - 72 });
        } else {
            nav.stop().animate({ top: scrollTop + screen_h - navHeight -20 });
        }
    }




    /*顶部导航*/
    $(".t_nav").slide({ type: "menu", titCell: "li", targetCell: ".nav_con", effect: "slideDown", delayTime: 300, triggerTime: 0, returnDefault: true });

    $('.f1 .img_wrap a').hover(function() {
        $(this).find('.txt_wrap').animate({ opacity: '1' });
        $(this).find('h2').animate({ left: '0' });
        $(this).find('p').delay(200).animate({ left: '0' });
        $(this).find('.icon').delay(300).animate({ bottom: '74px' });
    }, function() {
        $(this).find('.txt_wrap').delay(400).animate({ opacity: '0' });
        $(this).find('h2').animate({ left: -$(this).width() });
        $(this).find('p').delay(200).animate({ left: -$(this).width() });
        $(this).find('.icon').delay(300).animate({ bottom: '-100px' });
    })
})
