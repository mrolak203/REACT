
var display = '';
var stack = [];
var currentNum = '';
var ops = ['+', '-', '*', '-'];

function clear(){

	display = '';
 	$("#display").val(display);
 	stack = [];

}

$(function() {

	//functionality for when a digit is clicked 
    $(".digit").click(function() {
   
    	display += $(this).val();
    	$("#display").val(Number(display));
    	currentNum = display;

 	});

    //functionality for when an operator is clicked
    $(".operator").click(function(){

   		console.log(stack);

   		if(currentNum){
   			stack.push(currentNum);
   		}

    	//if the stack has another operator on top, override it with most recent entry 
    	if(stack[stack.length-1] && jQuery.inArray(stack[stack.length-1], ops) > -1){
    		stack[stack.length-1] = $(this).html();
    	} else{
    		stack.push($(this).html());
    	}

    	display = '';
    	currentNum = NaN;

    });

    //functionality for when the equals button is clicked
  	$("#equalsButton").click(function (){

  	})


    // functionality for when the clear button is clicked 
 	$("#clearButton").click(function (){

 		clear();

 	});



});