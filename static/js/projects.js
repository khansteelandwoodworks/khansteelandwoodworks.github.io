$(document).ready(function(){
	$(".imagebox").click(function(){
		var heading = $(this).find(".modalHeading").text();
		var base_image = $(this).find(".modalImages img");
		$(".modalBox").find(".modalHeading").text("");
		$(".modalBox").find(".imageSlider").html("");
		$(".modalBox").find(".modalHeading").text(heading);
		$(".modalBox").find(".imageSlider").html(base_image[0]);
		console.log(base_image);
		
	}).click(function(){
		$(".modalWrpr").fadeIn("slow");
		console.log("b");
	});
});