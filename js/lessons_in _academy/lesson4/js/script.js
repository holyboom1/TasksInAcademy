'use strict';

var x = +prompt("Введите число 1",10);
var y = +prompt("Введите число 2",5);

if(!isNaN(+x) && !isNaN(+y)) {
	var z = +prompt("Введите число 3", 15);
	//console.log(x+y==z && x>y);
	if(x>y && x+y==z) {
		console.log("число " +x+ " > " + y  + "и их сумма = " + z)
	}
	
	else if (x>y ) {
		console.log("число " +x+ " > " + y)
	}
	
	else if(x<y){
		
		console.log("число " + x + " < " + y)

	}
	
	else {
		console.log("число " + x + " = " + y)		
	}
}
else {
	console.error("У нас нет чисел")
}