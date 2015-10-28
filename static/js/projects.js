$(document).ready(function(){
	$(".imagebox").click(function(){
		var heading = $(this).find(".modalHeading").text();
		var image = $(this).find(".modalImages").find("img")[0];
		id_of_images = $(this).find(".modalImages").attr("id");
		$(".modalBox").attr("imageId", id_of_images);
		$(".modalBox").attr("imageNo", 0);
		$(".modalBox").find(".modalHeading").text("");
		$(".modalBox").find(".imageSliderImg").html("");
		$(".modalBox").find(".modalHeading").text(heading);
		$(".modalBox").find(".imageSliderImg").html($("<img>", {src: $(image).attr("src")}));
	}).click(function(){
		$(".modalWrpr").fadeIn("slow");
	});

	$(".prevImg").click(function(){
		var id_of_images = $(this).parents(".modalBox").attr("imageId");
		var image_number = $(this).parents(".modalBox").attr("imageNo");
		var total_images = $("#"+ id_of_images+" img").length;
		var image_number = Number(image_number) - 1;
		if(image_number<0){
			image_number = total_images-1;
		}
		$(".modalBox").attr("imageNo", image_number);
		image = $("#"+ id_of_images+" img")[image_number%total_images];
		$(".modalBox").find(".imageSliderImg").html("");
		$(".modalBox").find(".imageSliderImg").html($("<img>", {src: $(image).attr("src")}));
	});
	$(".nextImg").click(function(){
		var id_of_images = $(this).parents(".modalBox").attr("imageId");
		var image_number = $(this).parents(".modalBox").attr("imageNo");
		var total_images = $("#"+ id_of_images+" img").length;
		var image_number = Number(image_number) + 1;
		if(image_number>total_images){
			image_number = 0;
		}
		$(".modalBox").attr("imageNo", image_number);
		image = $("#"+ id_of_images+" img")[image_number%total_images];
		$(".modalBox").find(".imageSliderImg").html("");
		$(".modalBox").find(".imageSliderImg").html($("<img>", {src: $(image).attr("src")}));
	});
});