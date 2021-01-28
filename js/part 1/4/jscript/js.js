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

console.log(array);
console.log(array.join(" "));

var namberOne=0,i=0, namberTwo=0, namberThree=0, namberFour=0;
namberOne=  array[0];
i=array.length-1;
namberTwo=array[i];

console.log(namberOne, namberTwo);

array[0]=namberTwo;
array[i]=namberOne;
console.log(array);

console.log(array.join(" "));

namberThree=array[1];
namberFour=array[i-1];

console.log(namberFour,namberThree);

array[1]=namberFour;
array[i-1]=namberThree;

console.log(array);
console.log(array.join(" "));


//вывети минимальное и максимальное
//выводим значения которые повторяются
for (var max=-Infinity, min=+Infinity,i=0;i<array.length;i++){
    if (array[i]<min) min=array[i]
    if (array[i]>max) max=array[i]
}
console.log("минимальное =" + min + "  максимальное = " + max)
console.log("наш массив  " + array)

var array1=[];
array1=[].concat(array);
for (var i=0, newarr=[];i<array1.length;i++) {
    var k = 0;
    for (var j = 0; j < array1.length; j++) {
        if (array1[i] == array1[j] && k != 2) {
            k++
            array1.splice(j,1);

        } else if (k == 2) {
            newarr.push(array1[i]);
            array1.splice(i,1);
        }

        }

}


console.log(newarr);

console.log(newarr.join(" "));