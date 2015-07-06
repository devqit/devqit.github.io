$(document).ready(function(){	
	//Prevents any modal boxes or transitions to pop up before page load
	$("div").removeClass("preload");
	
	//Slides down navBar
	$('.navBar').slideDown(400);
	
	//Slides down user sites menu
	$('.userDir li').click(function(){
		$(this).children('ul').slideToggle(200);
	});
	
	//Changes the home button on navBar to show our Team Name
	$('.USdirHeading').hover(function(){
			$(this).text('Previous Projects');
		}, function(){
			$(this).text('Portfolio');
		}
	);
});


