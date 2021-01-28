'use strict';


var min, max;

// max = -Infinity;
// min = +Infinity;
var str="";
var flag=true;
do {
	var x = +prompt("Введите число 1",5);
	//1 5
	/* */
	if(flag && !isNaN(x)){
		max=x;
		min=x;
		flag=false;
	}
	if(!isNaN(x) && x>max){
		str+=x+" ";
		max=x;
	}
	
	if (!isNaN(x) && x<min) {
		str+=x+" ";
		min=x;
	}
	
}while(confirm("Еще"));

console.log(str, min , max)

