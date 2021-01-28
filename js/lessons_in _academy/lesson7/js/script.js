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
n=null;
//for(;true;){}
console.log(array);
console.log(array.join(" "));

var x = +prompt("Введите число",3);

for(var i=0, k=0, strP="",strO="";i<array.length;i++) {
	if(array[i]>0){
		strP+=array[i]+" "
	}
	else if(array[i]<0) {
		strO+=array[i]+" "
	}

	if(array[i]==x) k++

	// array[i]==x ? k++ : null

}

for(var i=array.length-1; i>=0; i--) {
	console.log("---",array[i])
}

console.log(strO,strP)

if(k!=0){
	console.log("Число "+ x + " повторяется " + k + " раз");
}

else {
	console.log("Число "+ x + " :(");
}

	console.log(array.reverse(), array.slice(2,5))
//array.length=0;
//array.splice(0);


var newArray= [].concat(array);

	newArray[2]=222222;

	console.log(newArray,array)