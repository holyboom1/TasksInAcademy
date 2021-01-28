'use strict';
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var n = randomInteger(3,7);
var array = [];
var array2 = [];
var i=0;

do {
	array.push(randomInteger(-3,3))
	i++;
}while(i<n);

n = randomInteger(3,7);
i=0;

do {
	array2.push(randomInteger(-3,3))
	i++;
}while(i<n);

var str= array.join(" ")+"\n"+array2.join(" ")+"\n";

if(array.length<array2.length){
	var minArray=array;
	var maxArray=array2;
	
}

else {
	var minArray=array2;
	var maxArray=array;
}

for(let i=0;i<minArray.length;i++){
	maxArray[i]+=minArray[i];
}

console.log(str + maxArray.join(" "))


/* do {
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
} */


	



