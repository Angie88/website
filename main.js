$(document).ready( function(){
	$( "#content" ).on("click",".showButton",function(event) {
	  event.preventDefault();
	  $(this).next(".hiddenContent").show("slow");
	});
});
