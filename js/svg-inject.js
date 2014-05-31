var $svg = $('.svg');

var $svg_dir = 'http://localhost/~ximmus/svg-injection/svg/';

var $svg_content = '';

$( document ).ready( function() {
  
  $( $svg ).each( function() {

  	$svg_content = $( this ).data( 'src' );

  	$svg_content = $svg_dir + $svg_content + '.svg';
  	
  	$( this ).load( $svg_content );
  
  });

});