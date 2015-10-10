$(function() {
      // if($('div').hasClass('mdl-layout__drawer')){
      //   console.log('sd');
      // }
	$('#menuToggle').click(function() {
	    if($(this).is(':checked')) {
	        $('.drawer').animate({left: "-535px"},300);
        	$(".container").css('padding-left','15px');
	    } else {
	       $('.drawer').animate({left: "0px"});
        	$(".container").css('padding-left','340px');

	    }
	});
});


