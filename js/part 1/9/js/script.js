'use strict';
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var n = randomInteger(3,5);
var array = [];
var str=""; var strNew="";

for(let i=0;i<n; i++){
	array.push([]);
	// array = [[]]
	//i=0
	
	// i=1
	// [[2,6,3], [3,4,5], []]
	for(let j=0;j<n; j++){
		// j=0 [[2]]
		// j=1 [[2,6]]
		// j=2 [[2,6,3]]
		array[i].push(randomInteger(1,9))
	}
	
	str+=array[i].join(" ") + "\n";
	
	//i=2
}

let temp = array[0];
	array[0]=array[array.length-1];
	array[array.length-1] = temp;
	
for(let i=0;i<n; i++){
	strNew+=array[i].join(" ") + "\n";	
}
	

console.log(array)
console.log(str,strNew)


	



