var firstNum, secondNum, operators, displayValue,ranA;
firstNum='';
secondNum='';
displayValue="0";
operators=null;
var maxLength=10;



var main=function(){
changeColor();

}

$(document).ready(main);

var changeColor=function(){
$('input[type="button"]').each(function(){
		ranA=randomGenerator();
        var c= colorGenerator(ranA);
        
	    $(this).css("background-color", c);
	    if(lightOrDark(ranA)=="light"){
	    	$(this).css('color', 'black');
	    }else{
	    	$(this).css('color', 'white');
	    }
});
}
var display=function(inputValue){
	if(firstNum.length>maxLength){
		displayValue="Too long!";
	}else{

		if((eval(firstNum)=='') && (firstNum.indexOf('.')==-1)){
			firstNum=inputValue;
		}else{
			firstNum=firstNum+inputValue;
		}
		displayValue=firstNum;
		}
	
	document.getElementById('display').value=displayValue;
}

var displayDot=function(){
   if(firstNum.length>maxLength){
		displayValue="Too long!";
	}else{
		if(eval(firstNum=='')){
			firstNum="0.";
		}else{
			if(firstNum.indexOf('.')==-1){
				firstNum=firstNum+".";
			};
		};
		displayValue=firstNum;
	};
	document.getElementById('display').value=displayValue;
}

var cal=function(operator){
	if(firstNum==''){
		if(secondNum=='') secondNum='0';
    	operators=operator;
    }else{
    	if(secondNum==''){
    		secondNum=firstNum;
    		firstNum='';
    		operators=operator;
    	}else{
    		equals();//calculate the previews value
		  if(secondNum=='') secondNum='0';
    	  operators=operator;
    	}       
    }
}

var equals=function(){
	if(!firstNum=='' && !secondNum==''){
	switch(operators){
		case '+': 
			displayValue=eval(secondNum)+eval(firstNum);
			secondNum=displayValue.toString();
			firstNum='';
			operators=null;
			break;
		case '-':
		    displayValue=eval(secondNum)-eval(firstNum);
		    secondNum=displayValue.toString();
			firstNum='';
			operators=null;
		    break;
		case '*':
			displayValue=eval(secondNum)*eval(firstNum);
			secondNum=displayValue.toString();
			firstNum='';
			operators=null;
			break;
		case '/':
			displayValue=eval(secondNum)/eval(firstNum);
			secondNum=displayValue.toString();
			firstNum='';
			operators=null;
			break;
	}

	document.getElementById('display').value=displayValue;

	if(secondNum=='Infinity'||secondNum=='-Infinity'||secondNum=='NaN'){
		firstNum='';
		secondNum='';
		displayValue="0";
		operators=null;
	}
}
}

var reset=function() {
	firstNum='';
	secondNum='';
	displayValue="0";
	operators=null;
	document.getElementById('display').value=displayValue;
}

var randomGenerator=function(){
	var randomArray=[];	
	for(var i=0;i<3;i++){
	randomArray.push(Math.floor(Math.random()*256));
	}

	return randomArray;
}

var colorGenerator=function(randomA){
	var color="rgb("+randomA.join()+")";
	return color;
}
var lightOrDark=function(randomA){
	var num=0;
    for( var i=0;i<randomA.length;i++){
          num= num+eval(randomA[i]);
    }
    console.log(num);
    //378 is the average of 3*255
    if(num<=378){
     return "dark";
    }else{
    	return "light";
    }
}
