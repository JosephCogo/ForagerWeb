
$( document ).ready( function(){
	$(window).scroll(function(){
		console.log();
		var elem = document.getElementsByClassName("content");
		$(".content").css("background-color", 'rgba(255,255,255,' + $(window).scrollTop()/600 + ')');

		//$(".btn-clean").css("", 'rgba(255,255,255,' + Math.min(0.2,$(window).scrollTop()/600) + ')');

		//scale the left movement by the content div width?

		$(".about").css("left",  Math.min(0, $(window).scrollTop()*1.5-500));

		//was 600
		$(".recipe").css("right",  Math.min(0, $(window).scrollTop()*1.5-6000));

		var right = $(window).scrollTop();

		$(".background").css("left",   Math.max(0,right*2));
		$(".background").css("top",   $(window).scrollTop());

		if($(window).scrollTop() > 500){
			
			$(".about").css("top",   $(window).scrollTop());
		}

		if($(window).scrollTop() > 1050){
			
			$(".drawing").css("top",   $(window).scrollTop() + 50);
		}

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

	});

	$("#map").click(function(){
		$(".background").fadeTo(500, 0, function(){
			$(".background").css("background-image",  "url('blackberries.jpg')");
			$(".background").fadeTo(500, 1);
		});
	});
});
