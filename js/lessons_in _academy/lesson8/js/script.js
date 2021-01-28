'use strict';
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var n = randomInteger(5,15);
var array = [];
var i=0;

do {
	array.push(randomInteger(-10,10))
	i++;
}while(i<n);

console.log(array.join(" "))

do {
	var x = +prompt("ВВедите число",1);
}while(isNaN(x))
var length = array.length;
var str="Массив: " +array.join(" ") + "\n";

for(var i=0;i<array.length;i++){
	if(array[i]==x) {
		array.splice(i,1);
		i--;
	}
}

if(length!=array.length){
	console.log(str+ "Новый массив : " +array.join(" ") )
}

else {
	console.log(str+ "В массиве нет числа "+ x );
}


	



