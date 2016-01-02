var msgArr = [ 'H', 'a', 'p', 'p', 'y', '</br> ', 'N', 'e', 'w',' ', 'Y', 'e', 'a', 'r', ' </br>', 'C', '9', '!' ];
var count = 0;

var main = $( '<div>' );
  main
    .addClass( 'main' );
  $( 'body' ).append( main );

setInterval( function( ) {
  $( main ).append( msgArr[ count ] );

  count ++;

}, 200 ); //end of setInterval

var behindMsg = $( '<div>' );
  behindMsg
    .addClass( 'behindMsg' );
  $( main ).append( behindMsg );

function fire( ) {
  $( behindMsg ).append( "<img id='theImg' src='http://www.wesonerdy.com/wp-content/uploads/2015/09/fireworks-animation-46.gif'/>" );
}
setTimeout( fire, 5*1000);

function face( ) {
  $( main ).prepend( "<img id='theImg' src='http://ct.fra.bz/ol/fz/sw/i59/2/12/31/frabz-bringing-in-the-new-year-LIKE-A-BOSS-2760d9.jpg'/>" );
}
setTimeout( face, 10*1000);