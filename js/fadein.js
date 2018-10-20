$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hidden').each( function(i){

            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object top is in the window, fade it it */
            if( bottom_of_window > top_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }

        });

    });

});