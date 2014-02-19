$(document).ready(function(){


$('.bxslider').bxSlider({
	  	controls:true,
	  	pager:true
 });


});/*end Doc ready*/


$(window).scroll(function() {
		$('#phone').each(function(){
		var imagePos = $(this).offset().top;
		
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});

		 

		$('#result').each(function(){
		var imagePos = $(this).offset().top;
		
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass("flash");
				setTimeout(function(){
				    odometer.innerHTML = 697600;
				}, 1000);
			}
		});		

		$('#example-4').each(function(){
		var imagePos = $(this).offset().top;
		
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$('.device-arrow').addClass("stretchRight");
			}
		});		

		$('#example-5').each(function(){
		var imagePos = $(this).offset().top;
		
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$('.graph-bar').addClass("pullUp");
			}
		});					
								

});