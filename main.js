
$( document ).ready( function(){
	$(window).scroll(function(){
		console.log();
		var elem = document.getElementsByClassName("content");
		$(".content").css("background-color", 'rgba(255,255,255,' + $(window).scrollTop()/600 + ')');

		//$(".btn-clean").css("", 'rgba(255,255,255,' + Math.min(0.2,$(window).scrollTop()/600) + ')');

		//scale the left movement by the content div width?

		$(".about").css("left",  Math.min(0, $(window).scrollTop()*1.5-300));

		$(".recipe").css("right",  Math.min(0, $(window).scrollTop()*1.5-600));

		var right = $(window).scrollTop();

		$(".background").css("left",   Math.max(0,right));
		$(".background").css("top",   $(window).scrollTop());

		console.log("-100px " + right + "px");
	});

	var open = false;
	var recipes = false;

	$("#more-fruit").click(function(){
		if(open == false){
			open = true;
			$("#fruit-list").fadeTo(0, 1, function(){});
		}
		else{
			open=false;
			$("#fruit-list").css("display", "none");
		}
		//$(".background").fadeTo(500, 0, function(){
			//$(".background").css("background-image",  "url('blackberries.jpg')");
			//$(".background").fadeTo(500, 1);
		//});
	});

		$("#more-recipes").click(function(){
		if(recipes == false){
			recipes = true;
			$("#recipe-list").fadeTo(0, 1, function(){});
		}
		else{
			recipes=false;
			$("#recipe-list").css("display", "none");
		}
		//$(".background").fadeTo(500, 0, function(){
			//$(".background").css("background-image",  "url('blackberries.jpg')");
			//$(".background").fadeTo(500, 1);
		//});
	});
});
