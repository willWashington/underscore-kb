//https://stackoverflow.com/a/8747204/10757573
//Create contains expression named icontains that is case insensitive
jQuery.expr[':'].containsInsensitive = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};

$(document).keyup(function(event) {
    if ($(".search").is(":focus") && event.key == "Enter") {
        var text = $('.search').val(); //declare variable that contains the search string
        $( "#testDivIndex" ).load( "https://willwashington.github.io/underscore-kb/index.html article", function() {
            //^ get the article elements from the html.html site and load them in to the #testDiv element
            $('.box').hide(); //hide all of the boxes
            $('.box:containsInsensitive("'+text+'")').show(); //show all the boxes that contains the search string    
        } );

        $( "#testDivHtml" ).load( "https://willwashington.github.io/underscore-kb/sites/html.html article", function() {
            //^ get the article elements from the html.html site and load them in to the #testDiv element
            $('.box').hide(); //hide all of the boxes
            $('.box:containsInsensitive("'+text+'")').show(); //show all the boxes that contains the search string    
        } );

        $( "#testDivCSS" ).load( "https://willwashington.github.io/underscore-kb/sites/css.html article", function() {
            //^ get the article elements from the html.html site and load them in to the #testDiv element
            $('.box').hide(); //hide all of the boxes        
            $('.box:containsInsensitive("'+text+'")').show(); //show all the boxes that contains the search string    
        } );

        $( "#testDivJS" ).load( "https://willwashington.github.io/underscore-kb/sites/js.html article", function() {
            //^ get the article elements from the html.html site and load them in to the #testDiv element
            $('.box').hide(); //hide all of the boxes        
            $('.box:containsInsensitive("'+text+'")').show(); //show all the boxes that contains the search string    
        } );
    }
});












// $( "#testDiv" ).load( "https://willwashington.github.io/underscore-kb/sites/html.html article", function() {
//     //^ get the article elements from the html.html site and load them in to the #testDiv element
//     $('.box').hide(); //hide all of the boxes
//     var searching = false;
//     if (searching) {
//         var text = ""; //declare variable that contains the search string
//         $('.box:containsInsensitive("'+text+'")').show(); //show all the boxes that contains the search string
//     }
// } );

