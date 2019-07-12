var swap = false;
$('.light-mode').click(function() { //when the user clicks a box
    $('body').toggleClass("background-color-dark background-color");
    $('.page-container').toggleClass("border-gray border-white");
    swap = !swap;
    if (swap) {
        $(this).text("Dark Mode");
    } else {
        $(this).text("Light Mode");
    }
  })