//https://stackoverflow.com/a/8747204/10757573
//Create contains expression named icontains that is case insensitive
jQuery.expr[':'].containsInsensitive = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};

var found = false;
$(document).keyup(function(event) {
    if ($(".search").is(":focus") && event.key == "Enter") {
        var text = $('.search').val(); //declare variable that contains the search string
        $( "#testDivIndex" ).load( "https://kb.badtuts.com/index.html article", function() {
            //^ get the article elements from the index.html site and load them in to the #testDiv element
            $('.box').hide(); //hide all of the boxes
            $('.box:containsInsensitive("'+text+'")').show('slow'); //show all the boxes that contain the search string
        } );

        $( "#testDivHtml" ).load( "https://kb.badtuts.com/sites/html.html article", function() {
            //^ get the article elements from the html.html site and load them in to the #testDiv element
            $('.box').hide(); //hide all of the boxes
            $('.box:containsInsensitive("'+text+'")').show('slow'); //show all the boxes that contain the search string
        } );

        $( "#testDivCSS" ).load( "https://kb.badtuts.com/sites/css.html article", function() {
            //^ get the article elements from the css.html site and load them in to the #testDiv element
            $('.box').hide(); //hide all of the boxes
            $('.box:containsInsensitive("'+text+'")').show('slow'); //show all the boxes that contain the search string    
        } );

        $( "#testDivJS" ).load( "https://kb.badtuts.com/sites/js.html article", function() {
            //^ get the article elements from the js.html site and load them in to the #testDiv element
            $('.box').hide(); //hide all of the boxes
            $('.box:containsInsensitive("'+text+'")').show('slow'); //show all the boxes that contain the search string
        } );
    }
});












// $( "#testDiv" ).load( "https://kb.badtuts.com/sites/html.html article", function() {
//     //^ get the article elements from the html.html site and load them in to the #testDiv element
//     $('.box').hide(); //hide all of the boxes
//     var searching = false;
//     if (searching) {
//         var text = ""; //declare variable that contains the search string
//         $('.box:containsInsensitive("'+text+'")').show(); //show all the boxes that contains the search string
//     }
// } );

