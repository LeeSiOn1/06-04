$(document).ready(function() {
    $(".nav").mouseenter(function(){
        $(this).find(".sub-menu").stop().slideDown(300);
        $(".nav-bg").stop().slideDown(300);
    });


    $(".nav").mouseleave(function(){
        $(this).find(".sub-menu").stop().slideUp(300);
        $(".nav-bg").stop().slideUp(300);
    });
});