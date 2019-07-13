//https://stackoverflow.com/a/8747204/10757573
//Create contains expression named icontains that is case insensitive
jQuery.expr[':'].icontains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};

$( "#testDiv" ).load( "https://willwashington.github.io/underscore-kb/sites/html.html article", function() {
    //^ get the article elements from the html.html site and load them in to the #testDiv element
    $('.box').hide(); //hide all of the boxes
    var text = "vs code"; //declare variable that contains the search string
    $('.box:icontains("'+text+'")').show(); //show all the boxes that contains the search string
} );

