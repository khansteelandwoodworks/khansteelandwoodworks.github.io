$(document).ready(function(){
	$(".imagePagination li").click(function(){
		var imageid = $(this).attr("imageid");
		var imagedisplay_dom = $(this).parents(".imageDisplay")
		var image_src = $("#"+imageid).find("img").attr("src");
		var image_mjr_dsc = $("#"+imageid).find(".imageDescription");
		$(imagedisplay_dom).find(".displayImg").attr("src",image_src);
		$(imagedisplay_dom).find("#imageTitle").text(image_mjr_dsc.attr("mainTitle"));
		$(imagedisplay_dom).find("#imageDescription").text(image_mjr_dsc.attr("subtitle"));
	});
});