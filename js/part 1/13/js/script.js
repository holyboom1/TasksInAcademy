'use strict';
var arr=[1,2,3,4,[4,5,6,7,[5,4,5]],5,[4,5]]
console.log(arr, `\n` , arr.join(" "))

var newArr=arr.flat(Infinity)
console.log(newArr, `\n` , newArr.join(" "))
