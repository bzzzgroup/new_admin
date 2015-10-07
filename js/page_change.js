$(function() {
    $('.one_page').click(function() {
        $('.not_always_visible_number').css('color','#fff');
        $('.always_visible_number').css('color','#d7dbdd');
        $(this).children('a').css('color','#939393 !important');
    });
 // var array = document.getElementsByName("page");
 // var l= array.length;
 // var x = document.getElementsByName("page")[2].innerHTML;
 // console.log(x);
 // for (i=0, i>l, i++) {
	// document.getElementsByName("page")[i].innerHTML=9;
 // }

});