$('.box').click(function() {
    $('.box').each( function() {
        if ($(this).offset().left < 0) {
            $(this).css("left", "160%");
        }
    });

    $(this).animate({
         left: '-50%'
     }, 500);
 
     if ($(this).next().length > 0) {
         $(this).next().animate({
             left: '50%'
         }, 500);
     } else {
         $(this).prevAll().last().animate({
             left: '50%'
         }, 500);
     }
});
