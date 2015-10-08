$(function() {
	$( ".page" ).each(function( index ) {
		if ($( this ).text()>9) {
			$( this ).removeClass( "page" ).addClass( "page_2_numbers" );
		}
	});
});