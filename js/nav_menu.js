$(function() {
	$('#menuToggle').click(function() {
	    if($(this).is(':checked')) {
	        $('.admin_menu').animate({left: "-700px"});
	    } else {
	       $('.admin_menu').animate({left: "0px"});
	    }
	});
});

