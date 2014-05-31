var $svg = $('.svg');

var $svg_content = $svg.data( 'src' ); // get the src data from the svg tags

var $svg_dir = 'http://localhost/~ximmus/svg-injection/svg/';

$svg_content = $svg_dir + $svg_content + '.svg';

$( document ).ready( function() {
  
  $( $svg ).load( $svg_content );

});