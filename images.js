function performColorBox(){
	console.log($("a.gallery"));
	$("a.gallery").colorbox();
}

$(document).ready(function(){
	jQuery.getScript("https://github.com/jackmoore/colorbox/blob/master/jquery.colorbox.js", function(){
		performColorBox();
	});
});

