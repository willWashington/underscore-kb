var allBoxes = $(".box");
let counter = 0;

allBoxes.each(function( index ) {
    if (this.id != "active-card") {
        $(this).hide();
    }
  });

  $('.box').click(function() {
    $( "#active-card" ).hide("fast");
    $( "#active-card" ).remove();
    counter++;
    if (counter == allBoxes.length) {
        counter = 0;
        console.log(counter);
    }
    var newActive = $( allBoxes ).get( counter );
    newActive.id = "active-card";
    $( "#active-card" ).show("fast");
    console.log($(newActive).is(":visible")); 
  })
  //this is working but when it should show the first element again, it doesn't show anything at all.
  //the log here shows that the first element (the reset in the loop) is not visible - the code is not working on the iteration

  

//get all boxes - x
//if a box is clicked on, slide it off screen and hide it
//count how many boxes have been clicked on
//show, slide in, and display the box that is next in line




// $('.box').click(function() {
//     $('.box').each( function() {
//         if ($(this).offset().left < 0) {            
//             $(this).css("left", "150%");
//         }
//     });

//     //off-screen speed controller
//     $(this).animate({
//          left: '-50%'
//      }, 500);
 

//      if ($(this).next().length > 0) {
//          $(this).next().animate({
//              left: '30%'
//          }, 500);
//      } else {
//          $(this).prevAll().last().animate({
//              left: '30%'
//          }, 500);
//      }
// });


