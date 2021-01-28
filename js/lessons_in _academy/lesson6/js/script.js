'use strict';


var sum=0,k=0;
var str="";
do {
	var x = +prompt("Введите число 1",5);
	if(!isNaN(x)){
		sum+=x;
		str+=x+" ";
		k++;
	}
	
}while(confirm("Еще"));

console.log(k);
console.log("Числа:" + str+ "\nСумму= "+sum)

