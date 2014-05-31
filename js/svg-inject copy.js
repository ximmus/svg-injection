// jQuery
var $svg = $('.svg-search');

var $svg_content = $svg.data( 'src' ); // get the src data from the svg tags

$svg_content = 'http://test-www.law.ufl.edu/wordpress/images/' + $svg_content + ".svg";

$( document ).ready( function() {

  //$( $search ).html( $search_content ); // grabs from variable above

  console.log( $svg_content );
  
  $( $svg ).load( $svg_content );

});