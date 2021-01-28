'use strict';
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

var n = randomInteger(5,8);
var array = [];

var i=0;

do {
    array.push(randomInteger(0,5))

    i++;
}while(i<n);
var max=-Infinity;
var arraymax=[];
for (let i=0; i<array.length; i++){
    if (array[i-1]+array[i]+array[i+1]>max){
            max=array[i-1]+array[i]+array[i+1];
            arraymax.length=0;

            arraymax=array.slice(i-1,i+2);
    }

}
console.log("наш массив " + array.join(" "));
console.log("самая большая комбинация " + arraymax.join(" "));
console.log("сумма максимума " + max);