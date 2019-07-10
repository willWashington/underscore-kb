var allBoxes = $(".box"); //get all the boxes on the page

allBoxes.each(function( index ) { //foreach box in the allBoxes array
    if (this.id != "active-card") { //if the box is not the active card
        $(this).hide(); //hide the box
    }
  });

  $('.box').click(function() { //when the user clicks a box
    $(this).hide("slow"); //hide the visible box
    var index = $(this).index() + 1; //get the index of the next box
    if (index != allBoxes.length) { //if the index of the next box is not equal to the length of the array of boxes
        $(this).next().show("slow"); //show the box
    } else { 
        $('.box:first').show("slow"); //show the first box in the list of boxes
    }
  })
