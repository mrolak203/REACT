
var display = '';

$(function() {

    $(".digit").click(function() {
   
    	display += $(this).val();
    	$("#display").val(Number(display));

 	});

 	$("#clearButton").click(function (){

 		display = '';
 		$("#display").val(display);

 	});
 	
});