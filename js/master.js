$(document).ready(function(){
	//Prevents any modal boxes or transitions to pop up before page load
	$("div").removeClass("preload");
	
	//Slides down navBar
	$('.navBar').slideDown(400);
	
	//Slides down sites menu
	$('.userDir li').hover(function(){
		$(this).children('ul').slideToggle(200);
	});
	
	//Changes the home button on navBar
	$('#home').hover(function(){
			$(this).text('Powered by GitHub');
		}, function(){
			$(this).text('Portfolio');
		}
	);
});


