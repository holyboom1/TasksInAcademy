'use strict';


var min, max;

// max = -Infinity;
// min = +Infinity;
var str="";
var strP="";
var strO="";
var simP=0;
var simO=0;
var	kP=0;
var kO=0;

do {
	var x = +prompt("Введите число 1",5);
	if(!isNaN(x) && x>0){
		strP+=x+" "
		kP++;
		sumP+=x;
		str+=x;
	}
	
	if(!isNaN(x) && x<0){
		strO+=x+" "
		kO++;
		sumO+=x;
		str+=x;
	}
	
	
	
}while(confirm("Еще"));

console.log(str)
console.log(strP,kP,sumP)
console.log(strO,kO,sumO)

