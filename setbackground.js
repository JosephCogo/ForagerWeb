$(document).ready(function(){
	$("#fuyuko").css("background-image", "url('/Fuyukos-1.jpg')");
	$("#groeni").css("background-image", "url('/Groeni-2.jpg')");
	
	//$("#other").css("background-image", "url('/marcelo-big.jpg')");

	$("#idalune").css("background-image", "url('/IdaLune-5.jpg')");
	$("#naow").css("background-image", "url('/Naow-6.jpg')");
	$("#corychampion").css("background-image", "url('/Fuyukos-1.jpg')");

	$("#other").on('click', expandImage);
});


function expandImage(){
	if($(this).hasClass('expanded')) {
		$(this).animate({height:138},500).removeClass('expanded');
	} 
	else { 
		//set height to auto
		$(this).css('height', 'auto');
		//get the auto height
		var autoHeight = $(this).height();
		//set height back to the original
		$(this).css('height', '138px');
		//then animate to the autoheight
		$(this).animate({height:autoHeight},500).addClass('expanded');
	}
}
