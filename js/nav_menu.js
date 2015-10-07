$(function() {
	$('#menuToggle').click(function() {
	    if($(this).is(':checked')) {
	    	$('.admin_menu').css('position','absolute');
	    	$('.right_part_main ').css('display','table');
	    	$('.right_part_main ').css('margin','auto');
	    	$('.right_part_main ').css('float','none');
	        $('.admin_menu').animate({left: "-700px"});
	    } else {
	        $('.admin_menu').animate({left: "0px"});
	    	$('.admin_menu').css('position','static');
	    	$('.right_part_main ').css('float','left');


	    }
	});
	
});

