jQuery( document ).ready(function($) {
    $('.video').hover(
        function() {
            $('.video').each(function() {
                $(this).find("video").get(0).pause();
            });
            $(this).find("video").get(0).play();
        },
        function() {
            $(this).find("video").get(0).pause();
        }
    );

    let s = setInterval(function(){
        if ( $('.video:nth-child(1) > video').height() > 0 ){
            $(".video").height(
                $('.video:nth-child(1) > video').height() + "px"
            )
            clearInterval(s);
        }
    },800);

    $(window).resize(function(){
        if ( $('.video:nth-child(1) > video').height() > 0 ){
            $(".video").height(
                $('.video:nth-child(1) > video').height() + "px"
            )
        }
    });

});