'use strict';
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

var n = randomInteger(10,20);
var array = [];
var i=0;

do {
    array.push(randomInteger(0,10))

    i++;
}while(i<n);
console.log("наш массив "+array.join(","));
var userNamber=+prompt("введите число", 1);

if (!isNaN(userNamber)){
    for (var i=0,k=0; i<array.length; i++){
        if (userNamber==array[i]){
            array.splice(i,1);
            k++
        }
    }
}
else {console.log("вы ввелинекорректное значение")};

if (k==0){
    console.log("введенного числа нет в массиве")
}
else {
    console.log("ваше число удалено");
    console.log("наш массив после изменения "+array.join(","));
}

