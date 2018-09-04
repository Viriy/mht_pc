$(function() {
    $(".row_nav a").hover(function(){
        $(this).css("color","#fff").siblings().css("color","#666")
    },function(){
        $(this).css("color","#666");
        $(".row_nav .active").css("color","#fff");
    })
    $(".row_nav").lavaLamp({
        fx: "backout",
        speed:70,
        click: function(event, menuItem) {
            $(this).addClass("active").siblings().removeClass("active")
        }
    });

    //custominput();
    $("input:radio").change(function() {
        custominput();
    })
    $('input, textarea').placeholder();
})

function custominput() {
    $("input:radio").siblings("i").removeClass("radio_checked");
    $("input:radio:checked").siblings("i").addClass("radio_checked");
    // $("input:checkbox").siblings(".icon").html("&#xe6dd;").removeClass("orange");
    // $("input:checkbox:checked").siblings(".icon").html("&#xe6dc;").addClass("orange");
}