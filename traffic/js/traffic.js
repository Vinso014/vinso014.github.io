$(document).ready(function() {

	var scrolled=0; // scroll starting point

	$(".down").on("click" ,function(){
        scrolled=scrolled+900; // 900 is the amount of pixels that is scrolled down
        $("body").animate({
			scrollTop:  scrolled
		});
	});

    $(".up").on("click" ,function(){
		scrolled=scrolled-900; // 900 is the amount of pixels that is scrolled up
		$("body").animate({
			scrollTop:  scrolled
		});
	});

});