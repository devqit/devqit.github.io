$(document).ready(function(){	
	//Prevents any modal boxes or transitions to pop up before page load
	$("div").removeClass("preload");
	
	//Slides down navBar ONLY in the homepage
	$('.navBar').slideDown(400);
	
	//Slides down user sites menu
	$('.userDir li').click(function(){
		$(this).children('ul').slideToggle(200);
	});
	
	//Changes the home button on navBar to show our Team Name
	$('#home').hover(function(){
			$(this).text('Powered by GitHub');
		}, function(){
			$(this).text('Portfolio');
		}
	);
});


