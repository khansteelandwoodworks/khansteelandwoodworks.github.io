$(document).ready(function(){
	$(".modalBoxWrpr").click(function(e){
	var container = $(".modalBox");
	var closeButton = $(".modalCloseBtn");

    if (!container.is(e.target) && container.has(e.target).length === 0  || closeButton.is(e.target)){
        container.parents(".modalWrpr").fadeOut("fast");
    }
		
	});
});