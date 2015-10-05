$(function() {
/*	$('#menuToggle').click(function() {
	    if($(this).is(':checked')) {
	        $('.admin_menu').animate({left: "-700px"});
	    } else {
	       $('.admin_menu').animate({left: "0px"});
	    }
	});*/
	$('#menuToggle').click(function() {
	    if($(this).is(':checked')) {
	    	$('.driver').css('display','block');
	    	$('.driver').css('position','absolute');
	    	$('.driver').css('left','0');
	    	$('.driver').css('top','0');
	        $('.driver').animate({left: "-700px"});
	    } else {

	       $('.driver').animate({left: "0px"});
	       	$('.driver').css('display','table-cell');
	    	$('.driver').css('position','static');
	    }
	});
});

