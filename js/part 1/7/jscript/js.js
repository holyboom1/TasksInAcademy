'use strict';
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

var n = randomInteger(5,15);
var array = [];

var i=0;

do {
    array.push(randomInteger(1,5))

    i++;
}while(i<n);
console.log(array.join(" "))
console.log(array)
var max=0;
var k=0;
var k1=0;
for (let i = 0, x=0; i<array.length ; i++ ){
    x=array[i]
    for (let i1=0; i1<array.length; i1++) {

        if (x==array[i1]  ){
            k++}


        }
    if (k>k1){
        k1=k;
        k=0
        max=array[i]
    }

}

console.log(k1, max)

//максимальную серрию элементов идужих по возростянию
//найти у удалеить элементы кот встречаются более 2х раз
//массив перевод в 0 1  певое значение это ноль а дальше чередование