
var display = '';
var stack = [];
var currentNum = '';
var ops = ['+', '-', '*', '÷'];

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


   		if(currentNum){
   			stack.push(Number(currentNum));
   		}

   		console.log(stack);

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

  		if(stack.length < 2)
  			return;

  		var num1 = Number(stack[stack.length-2]);
  		var op = stack[stack.length-1];
  		var num2 = Number(currentNum);

  	//handle the case of trying to divide by zero
  		if(op == '÷' && num2 == 0){
  			clear();
  			$("#display").val('∞');
  			currentNum = '';
  			return;
  		}

  		if(op == '÷')
  			op = '/';


  		clear();

  		currentNum = eval(num1 + op + num2);

  		$("#display").val(currentNum);

  	})


    // functionality for when the clear button is clicked 
 	$("#clearButton").click(function (){

 		clear();

 	});



});